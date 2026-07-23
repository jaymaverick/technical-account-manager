---
project: TAM Dashboard
domain: TAM Portfolio
architecture: React Python
status: Overview
description: Portfolio demo for technical account management dashboard
title: Building a Creator Infrastructure Health Engine
sidebar_label: TAM Dashboard Demo
---

# Account Health Monitoring Dashboard

As a Technical Account Manager, monitoring changes in key metrics and receiving alerts for risk accounts is critical to preventing churn.

Below is an interactive live demonstration of a simple account dashboard I built to catch checkout and SSL anomalies in real time.

This demo runs using mock data, but the functionality is fundamentally the same as the dashboard I used daily for over a year. There's many ways to upgrade this dashboard, and I've since moved onto a more elaborate and scalable setup using Posthog.

import TamDashboard from '@site/src/components/TamDashboard';
import BrowserOnly from '@docusaurus/BrowserOnly';

<BrowserOnly fallback={<div>Loading dashboard...</div>}>
  {() => <TamDashboard />}
</BrowserOnly>

## Key Takeaways
- **Checkout Failures:** High error rates trigger revenue drop warnings automatically.
- **Deliverability:** Email spam complaint rates over 0.1% raise immediate domain risks.