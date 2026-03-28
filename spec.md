# BioCare Pest & Termite Solutions Website

## Current State
New project — no existing application files.

## Requested Changes (Diff)

### Add
- Full multi-page marketing website for BioCare Pest & Termite Solutions, Thiruvananthapuram
- Pages: Home, Services (with 4 sub-sections), Termite Pre-Construction (dedicated), Hotel & Restaurant (dedicated), About Us, Contact / Free Inspection
- Contact form with fields: Name, Phone, Address/Area, Service checkboxes (Home Pest Control, Hotel/Restaurant, Termite Pre-Construction, EcoCare, Other)
- Contact form submissions stored in backend (Motoko)
- Sticky navigation with links to all pages
- Footer on every page with contact info

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. Backend: store contact form submissions (name, phone, address, services, timestamp)
2. Frontend pages:
   - **Home**: Hero banner with headline, why-choose-us bullet points, CTA buttons (Call / WhatsApp)
   - **Services**: Overview page with 4 service cards linking to detail sections
   - **Termite Pre-Construction**: Dedicated page with 3-step how-it-works, ideal-for list, eco add-ons
   - **Hotel & Restaurant**: Dedicated page with service list, pricing table, EcoCare option
   - **About Us**: Mission, services list, trust signals
   - **Contact**: Contact details, address, free inspection booking form
3. Shared: sticky navbar, footer with phone/WhatsApp/email
4. Contact form wired to backend canister
