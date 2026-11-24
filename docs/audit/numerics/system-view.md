# Numeric literals — system-view.js

[Inventory guide](../NUMERICS.html). Exact contexts are accessible in the full source.

| Source | Literal | Unit / mechanism | Expression context |
| --- | --- | --- | --- |
| [system-view.js:16](../source/system-view.js.html#L16) | 2 | n · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n = (x, places = 2) => Number.isFinite(x) ? x.toLocaleString(undefined, { maximumFractionDigits: places }) : "—" ` |
| [system-view.js:20](../source/system-view.js.html#L20) | 0 | total · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` xs.reduce((a, b) => a + b, 0) ` |
| [system-view.js:21](../source/system-view.js.html#L21) | 3 | change · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(closing - opening, 3) ` |
| [system-view.js:30](../source/system-view.js.html#L30) | 2 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (x1 + x2) / 2 ` |
| [system-view.js:31](../source/system-view.js.html#L31) | 2 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (y1 + y2) / 2 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 1e-12 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` amount > 1e-12 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 5 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(amount, 5) ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 9 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cx - 9 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 8 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cy - 8 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 9 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cx + 9 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 8 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cy + 8 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 9 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cx + 9 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 8 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cy - 8 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 9 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cx - 9 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 8 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cy + 8 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 29 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cy + 29 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 48 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cy + 48 ` |
| [system-view.js:32](../source/system-view.js.html#L32) | 4 | pipe · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(amount, 4) ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 130 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x + 130 ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 27 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` y + 27 ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 130 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x + 130 ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 55 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` y + 55 ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 4 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(value, 4) ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 130 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x + 130 ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 79 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` y + 79 ` |
| [system-view.js:35](../source/system-view.js.html#L35) | 4 | stock · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(before, 4) ` |
| [system-view.js:40](../source/system-view.js.html#L40) | 65 | influence · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x1 + 65 ` |
| [system-view.js:40](../source/system-view.js.html#L40) | 10 | influence · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` x1 + 10 ` |
| [system-view.js:40](../source/system-view.js.html#L40) | 2 | influence · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (y1 + y2) / 2 ` |
| [system-view.js:56](../source/system-view.js.html#L56) | 70 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 55) ` |
| [system-view.js:56](../source/system-view.js.html#L56) | 55 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 55) ` |
| [system-view.js:58](../source/system-view.js.html#L58) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Productive capacity", end.capital, "output RU/month", open.capital, ) ` |
| [system-view.js:59](../source/system-view.js.html#L59) | 30 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Productive capacity", end.capital, "output RU/month", open.capital, ) ` |
| [system-view.js:65](../source/system-view.js.html#L65) | 930 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 55) ` |
| [system-view.js:65](../source/system-view.js.html#L65) | 55 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 55) ` |
| [system-view.js:67](../source/system-view.js.html#L67) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, flows("capital", "in"), "Completed installation", "capacity", "AKX-ECO-02", "capital-in", ) ` |
| [system-view.js:68](../source/system-view.js.html#L68) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, flows("capital", "in"), "Completed installation", "capacity", "AKX-ECO-02", "capital-in", ) ` |
| [system-view.js:69](../source/system-view.js.html#L69) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, flows("capital", "in"), "Completed installation", "capacity", "AKX-ECO-02", "capital-in", ) ` |
| [system-view.js:70](../source/system-view.js.html#L70) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, flows("capital", "in"), "Completed installation", "capacity", "AKX-ECO-02", "capital-in", ) ` |
| [system-view.js:78](../source/system-view.js.html#L78) | 630 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("capital", "out"), "Capital consumption", "capacity", "AKX-ECO-02", "capital-out", ) ` |
| [system-view.js:79](../source/system-view.js.html#L79) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("capital", "out"), "Capital consumption", "capacity", "AKX-ECO-02", "capital-out", ) ` |
| [system-view.js:80](../source/system-view.js.html#L80) | 900 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("capital", "out"), "Capital consumption", "capacity", "AKX-ECO-02", "capital-out", ) ` |
| [system-view.js:81](../source/system-view.js.html#L81) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("capital", "out"), "Capital consumption", "capacity", "AKX-ECO-02", "capital-out", ) ` |
| [system-view.js:89](../source/system-view.js.html#L89) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock(370, 265, "Public treasury", end.treasury, "RU", open.treasury) ` |
| [system-view.js:89](../source/system-view.js.html#L89) | 265 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock(370, 265, "Public treasury", end.treasury, "RU", open.treasury) ` |
| [system-view.js:90](../source/system-view.js.html#L90) | 70 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 290) ` |
| [system-view.js:90](../source/system-view.js.html#L90) | 290 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 290) ` |
| [system-view.js:91](../source/system-view.js.html#L91) | 930 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 290) ` |
| [system-view.js:91](../source/system-view.js.html#L91) | 290 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 290) ` |
| [system-view.js:94](../source/system-view.js.html#L94) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, received, "Tax collected", "RU", "AKX-ECO-04", "tax", ) ` |
| [system-view.js:95](../source/system-view.js.html#L95) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, received, "Tax collected", "RU", "AKX-ECO-04", "tax", ) ` |
| [system-view.js:96](../source/system-view.js.html#L96) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, received, "Tax collected", "RU", "AKX-ECO-04", "tax", ) ` |
| [system-view.js:97](../source/system-view.js.html#L97) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, received, "Tax collected", "RU", "AKX-ECO-04", "tax", ) ` |
| [system-view.js:106](../source/system-view.js.html#L106) | 3 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(netOther, 3) ` |
| [system-view.js:107](../source/system-view.js.html#L107) | 500 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Realized taxable activity") ` |
| [system-view.js:107](../source/system-view.js.html#L107) | 135 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Realized taxable activity") ` |
| [system-view.js:107](../source/system-view.js.html#L107) | 500 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Realized taxable activity") ` |
| [system-view.js:107](../source/system-view.js.html#L107) | 255 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Realized taxable activity") ` |
| [system-view.js:111](../source/system-view.js.html#L111) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Unfinished maintenance", end.maintenance, "PM", open.maintenance, ) ` |
| [system-view.js:112](../source/system-view.js.html#L112) | 30 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Unfinished maintenance", end.maintenance, "PM", open.maintenance, ) ` |
| [system-view.js:119](../source/system-view.js.html#L119) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, Math.max( 0, end.maintenance - open.maintenance + flows("maintenance", "out"), ), "New upkeep due", "PM", "AKX-MNT-01", "maintenance-due", ) ` |
| [system-view.js:120](../source/system-view.js.html#L120) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, Math.max( 0, end.maintenance - open.maintenance + flows("maintenance", "out"), ), "New upkeep due", "PM", "AKX-MNT-01", "maintenance-due", ) ` |
| [system-view.js:121](../source/system-view.js.html#L121) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, Math.max( 0, end.maintenance - open.maintenance + flows("maintenance", "out"), ), "New upkeep due", "PM", "AKX-MNT-01", "maintenance-due", ) ` |
| [system-view.js:122](../source/system-view.js.html#L122) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, Math.max( 0, end.maintenance - open.maintenance + flows("maintenance", "out"), ), "New upkeep due", "PM", "AKX-MNT-01", "maintenance-due", ) ` |
| [system-view.js:124](../source/system-view.js.html#L124) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max( 0, end.maintenance - open.maintenance + flows("maintenance", "out"), ) ` |
| [system-view.js:133](../source/system-view.js.html#L133) | 630 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("maintenance", "out"), "Performed upkeep", "PM", "AKX-MNT-02", "upkeep", ) ` |
| [system-view.js:134](../source/system-view.js.html#L134) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("maintenance", "out"), "Performed upkeep", "PM", "AKX-MNT-02", "upkeep", ) ` |
| [system-view.js:135](../source/system-view.js.html#L135) | 900 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("maintenance", "out"), "Performed upkeep", "PM", "AKX-MNT-02", "upkeep", ) ` |
| [system-view.js:136](../source/system-view.js.html#L136) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, flows("maintenance", "out"), "Performed upkeep", "PM", "AKX-MNT-02", "upkeep", ) ` |
| [system-view.js:144](../source/system-view.js.html#L144) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 265, "Mean persistent capability", end.capability, "", open.capability, ) ` |
| [system-view.js:145](../source/system-view.js.html#L145) | 265 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 265, "Mean persistent capability", end.capability, "", open.capability, ) ` |
| [system-view.js:152](../source/system-view.js.html#L152) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows("capability", "in") / Math.max(1, p.organizationCount &#124;&#124; 1), "Repair and rebuilding", "mean fraction", "AKX-MNT-02", "repair", ) ` |
| [system-view.js:153](../source/system-view.js.html#L153) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows("capability", "in") / Math.max(1, p.organizationCount &#124;&#124; 1), "Repair and rebuilding", "mean fraction", "AKX-MNT-02", "repair", ) ` |
| [system-view.js:154](../source/system-view.js.html#L154) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows("capability", "in") / Math.max(1, p.organizationCount &#124;&#124; 1), "Repair and rebuilding", "mean fraction", "AKX-MNT-02", "repair", ) ` |
| [system-view.js:155](../source/system-view.js.html#L155) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows("capability", "in") / Math.max(1, p.organizationCount &#124;&#124; 1), "Repair and rebuilding", "mean fraction", "AKX-MNT-02", "repair", ) ` |
| [system-view.js:156](../source/system-view.js.html#L156) | 1 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max(1, p.organizationCount &#124;&#124; 1) ` |
| [system-view.js:156](../source/system-view.js.html#L156) | 1 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max(1, p.organizationCount &#124;&#124; 1) ` |
| [system-view.js:163](../source/system-view.js.html#L163) | 630 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows("capability", "out") / Math.max(1, p.organizationCount &#124;&#124; 1), "Neglect damage", "mean fraction", "AKX-CAP-01", "damage", ) ` |
| [system-view.js:164](../source/system-view.js.html#L164) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows("capability", "out") / Math.max(1, p.organizationCount &#124;&#124; 1), "Neglect damage", "mean fraction", "AKX-CAP-01", "damage", ) ` |
| [system-view.js:165](../source/system-view.js.html#L165) | 900 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows("capability", "out") / Math.max(1, p.organizationCount &#124;&#124; 1), "Neglect damage", "mean fraction", "AKX-CAP-01", "damage", ) ` |
| [system-view.js:166](../source/system-view.js.html#L166) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows("capability", "out") / Math.max(1, p.organizationCount &#124;&#124; 1), "Neglect damage", "mean fraction", "AKX-CAP-01", "damage", ) ` |
| [system-view.js:167](../source/system-view.js.html#L167) | 1 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max(1, p.organizationCount &#124;&#124; 1) ` |
| [system-view.js:167](../source/system-view.js.html#L167) | 1 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max(1, p.organizationCount &#124;&#124; 1) ` |
| [system-view.js:173](../source/system-view.js.html#L173) | 500 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Remaining upkeep constrains work") ` |
| [system-view.js:173](../source/system-view.js.html#L173) | 135 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Remaining upkeep constrains work") ` |
| [system-view.js:173](../source/system-view.js.html#L173) | 500 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Remaining upkeep constrains work") ` |
| [system-view.js:173](../source/system-view.js.html#L173) | 255 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence(500, 135, 500, 255, "Remaining upkeep constrains work") ` |
| [system-view.js:174](../source/system-view.js.html#L174) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` end.attention * 100 ` |
| [system-view.js:176](../source/system-view.js.html#L176) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` in: 0 ` |
| [system-view.js:176](../source/system-view.js.html#L176) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` out: 0 ` |
| [system-view.js:178](../source/system-view.js.html#L178) | 70 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 55) ` |
| [system-view.js:178](../source/system-view.js.html#L178) | 55 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 55) ` |
| [system-view.js:180](../source/system-view.js.html#L180) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Unspent reform allocations", end.reformFunds[mode] &#124;&#124; 0, "RU", open.reformFunds[mode] &#124;&#124; 0, ) ` |
| [system-view.js:181](../source/system-view.js.html#L181) | 30 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Unspent reform allocations", end.reformFunds[mode] &#124;&#124; 0, "RU", open.reformFunds[mode] &#124;&#124; 0, ) ` |
| [system-view.js:183](../source/system-view.js.html#L183) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Unspent reform allocations", end.reformFunds[mode] &#124;&#124; 0, "RU", open.reformFunds[mode] &#124;&#124; 0, ) ` |
| [system-view.js:185](../source/system-view.js.html#L185) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 30, "Unspent reform allocations", end.reformFunds[mode] &#124;&#124; 0, "RU", open.reformFunds[mode] &#124;&#124; 0, ) ` |
| [system-view.js:187](../source/system-view.js.html#L187) | 930 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 55) ` |
| [system-view.js:187](../source/system-view.js.html#L187) | 55 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 55) ` |
| [system-view.js:189](../source/system-view.js.html#L189) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, receipts.in, "Actual mobilization", "RU", "AK-REF-02", "funding", ) ` |
| [system-view.js:190](../source/system-view.js.html#L190) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, receipts.in, "Actual mobilization", "RU", "AK-REF-02", "funding", ) ` |
| [system-view.js:191](../source/system-view.js.html#L191) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, receipts.in, "Actual mobilization", "RU", "AK-REF-02", "funding", ) ` |
| [system-view.js:192](../source/system-view.js.html#L192) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 78, 370, 78, receipts.in, "Actual mobilization", "RU", "AK-REF-02", "funding", ) ` |
| [system-view.js:200](../source/system-view.js.html#L200) | 630 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, receipts.out, "Actual expenditure", "RU", "AK-REF-03", "spending", ) ` |
| [system-view.js:201](../source/system-view.js.html#L201) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, receipts.out, "Actual expenditure", "RU", "AK-REF-03", "spending", ) ` |
| [system-view.js:202](../source/system-view.js.html#L202) | 900 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, receipts.out, "Actual expenditure", "RU", "AK-REF-03", "spending", ) ` |
| [system-view.js:203](../source/system-view.js.html#L203) | 78 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 78, 900, 78, receipts.out, "Actual expenditure", "RU", "AK-REF-03", "spending", ) ` |
| [system-view.js:210](../source/system-view.js.html#L210) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` level = end.influence?.[mode]?.[component] &#124;&#124; 0 ` |
| [system-view.js:211](../source/system-view.js.html#L211) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` before = open.influence?.[mode]?.[component] &#124;&#124; 0 ` |
| [system-view.js:213](../source/system-view.js.html#L213) | 70 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 290) ` |
| [system-view.js:213](../source/system-view.js.html#L213) | 290 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(70, 290) ` |
| [system-view.js:215](../source/system-view.js.html#L215) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 265, "Mean retained " + component, level * 100, "% influence", before * 100, ) ` |
| [system-view.js:216](../source/system-view.js.html#L216) | 265 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` stock( 370, 265, "Mean retained " + component, level * 100, "% influence", before * 100, ) ` |
| [system-view.js:218](../source/system-view.js.html#L218) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` level * 100 ` |
| [system-view.js:220](../source/system-view.js.html#L220) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` before * 100 ` |
| [system-view.js:222](../source/system-view.js.html#L222) | 930 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 290) ` |
| [system-view.js:222](../source/system-view.js.html#L222) | 290 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` cloud(930, 290) ` |
| [system-view.js:224](../source/system-view.js.html#L224) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows(mode + ":" + component, "in") * 100, "Accepted learning", "mean points", "AK-ADP-01", "learning", ) ` |
| [system-view.js:225](../source/system-view.js.html#L225) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows(mode + ":" + component, "in") * 100, "Accepted learning", "mean points", "AK-ADP-01", "learning", ) ` |
| [system-view.js:226](../source/system-view.js.html#L226) | 370 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows(mode + ":" + component, "in") * 100, "Accepted learning", "mean points", "AK-ADP-01", "learning", ) ` |
| [system-view.js:227](../source/system-view.js.html#L227) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 100, 313, 370, 313, flows(mode + ":" + component, "in") * 100, "Accepted learning", "mean points", "AK-ADP-01", "learning", ) ` |
| [system-view.js:228](../source/system-view.js.html#L228) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` flows(mode + ":" + component, "in") * 100 ` |
| [system-view.js:235](../source/system-view.js.html#L235) | 630 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows(mode + ":" + component, "out") * 100, "Wear-off", "mean points", "AK-ADP-02", "decay", ) ` |
| [system-view.js:236](../source/system-view.js.html#L236) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows(mode + ":" + component, "out") * 100, "Wear-off", "mean points", "AK-ADP-02", "decay", ) ` |
| [system-view.js:237](../source/system-view.js.html#L237) | 900 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows(mode + ":" + component, "out") * 100, "Wear-off", "mean points", "AK-ADP-02", "decay", ) ` |
| [system-view.js:238](../source/system-view.js.html#L238) | 313 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` pipe( 630, 313, 900, 313, flows(mode + ":" + component, "out") * 100, "Wear-off", "mean points", "AK-ADP-02", "decay", ) ` |
| [system-view.js:239](../source/system-view.js.html#L239) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` flows(mode + ":" + component, "out") * 100 ` |
| [system-view.js:246](../source/system-view.js.html#L246) | 630 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence( 630, 130, 220, 265, "Delivered experience, uptake and quality", ) ` |
| [system-view.js:247](../source/system-view.js.html#L247) | 130 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence( 630, 130, 220, 265, "Delivered experience, uptake and quality", ) ` |
| [system-view.js:248](../source/system-view.js.html#L248) | 220 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence( 630, 130, 220, 265, "Delivered experience, uptake and quality", ) ` |
| [system-view.js:249](../source/system-view.js.html#L249) | 265 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` influence( 630, 130, 220, 265, "Delivered experience, uptake and quality", ) ` |
| [system-view.js:253](../source/system-view.js.html#L253) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` Math.max( 0, (p.policyActivity?.[mode] &#124;&#124; 0) - (p.previousPolicyActivity?.[mode] &#124;&#124; 0), ) ` |
| [system-view.js:254](../source/system-view.js.html#L254) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (p.policyActivity?.[mode] &#124;&#124; 0) - (p.previousPolicyActivity?.[mode] &#124;&#124; 0) ` |
| [system-view.js:255](../source/system-view.js.html#L255) | 0 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (p.policyActivity?.[mode] &#124;&#124; 0) - (p.previousPolicyActivity?.[mode] &#124;&#124; 0) ` |
| [system-view.js:257](../source/system-view.js.html#L257) | 3 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(delivery, 3) ` |
| [system-view.js:257](../source/system-view.js.html#L257) | 100 | diagram · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` end.capability * 100 ` |
| [system-view.js:292](../source/system-view.js.html#L292) | 0 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` select.value = modes.includes(previous) ? previous : modes[0] ` |
| [system-view.js:317](../source/system-view.js.html#L317) | 100 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` c.knowledge * 100 ` |
| [system-view.js:317](../source/system-view.js.html#L317) | 100 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` c.attention * 100 ` |
| [system-view.js:317](../source/system-view.js.html#L317) | 100 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` c.timeUsed * 100 ` |
| [system-view.js:323](../source/system-view.js.html#L323) | -35 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` (p?.flows &#124;&#124; []) .slice(-35) ` |
| [system-view.js:326](../source/system-view.js.html#L326) | 5 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` n(f.amount, 5) ` |
| [system-view.js:335](../source/system-view.js.html#L335) | 20 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` r.eligible < 20 ` |
| [system-view.js:335](../source/system-view.js.html#L335) | 100 | render · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` 100 * r.rate ` |
| [system-view.js:362](../source/system-view.js.html#L362) | 1 | bind · [AK-VAL-01](../TECHNICAL.html#ak-val-01) | ` month + 1 ` |
