// Saves leads to a system TGP can follow up from. Configure one or both via env:
//
//   HUBSPOT_ACCESS_TOKEN  HubSpot private-app token (scope: crm.objects.contacts.write).
//                         Creates/updates a contact by email. Free HubSpot CRM works.
//   LEADS_WEBHOOK_URL     Any URL that accepts a JSON POST — e.g. a Zapier/Make
//                         webhook or a Google Apps Script that appends to a Sheet.
//
// If neither is set, the TGP notification email is the only record of the lead.

async function saveToHubSpot(lead) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) return 'skipped';
  const [firstname, ...rest] = lead.name.trim().split(/\s+/);
  const properties = {
    email: lead.email,
    firstname,
    lastname: rest.join(' '),
    company: lead.company,
    lifecyclestage: 'lead',
    hs_lead_status: 'NEW',
  };
  const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

  let res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST', headers, body: JSON.stringify({ properties }),
  });
  if (res.status === 409) {
    // Contact already exists — update it instead (lifecycle stage can't move backwards, so leave it out)
    delete properties.lifecyclestage;
    res = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(lead.email)}?idProperty=email`, {
      method: 'PATCH', headers, body: JSON.stringify({ properties }),
    });
  }
  if (!res.ok) throw new Error(`HubSpot ${res.status}: ${await res.text()}`);
  return 'hubspot';
}

async function saveToWebhook(lead) {
  const url = process.env.LEADS_WEBHOOK_URL;
  if (!url) return 'skipped';
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
  if (!res.ok) throw new Error(`Lead webhook ${res.status}`);
  return 'webhook';
}

async function saveLead(lead) {
  const results = await Promise.allSettled([saveToHubSpot(lead), saveToWebhook(lead)]);
  const saved = [];
  results.forEach(r => {
    if (r.status === 'fulfilled' && r.value !== 'skipped') saved.push(r.value);
    if (r.status === 'rejected') console.error('[leads]', r.reason && r.reason.message);
  });
  return saved; // e.g. ['hubspot'] — empty if nothing configured or all failed
}

module.exports = { saveLead };
