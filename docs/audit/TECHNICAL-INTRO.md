# Technical specification

This specification follows the seven-part ODD reporting structure as an organizing aid: purpose and patterns; entities/state/scales; scheduling; design concepts; initialization; inputs; submodels. This is not an ODD certification. Stable mechanism IDs link to the narrative and full annotated code. Exact numeric expressions, action vectors and state assignments are supplied in generated appendices rather than hidden behind prose.

## 1. Purpose and patterns

The model explores the development of corrupt conduct and anti-corruption reforms in a synthetic society. Qualitative targets include heterogeneous choices, imperfect information, organizational resistance, delayed implementation, bounded learning, persistence of routines, resource competition and different policy trajectories. These are design targets, not a fitted list of empirical validation patterns. The model does not estimate a real country's treatment effect. A paired run estimates an effect **inside this model**, under its parameters, initial society and event seed.

Behavioral and display version are **3.0.0**, a provisional extension. The [extension specification](EXTENSION.html) supersedes older fixed-GDP, anonymous-income, wage-withholding, fixed capability-decay and once-per-month encounter descriptions. Schema identifiers version country evidence, reconstructed baselines, adaptation, observations and saved payloads separately. Exact expressions are authoritative in source; mechanism descriptions explain them without replacing code.

## 2. Entities, state variables and scales

| Entity / storage | Meaning and principal state | Units / identity |
|---|---|---|
| Individual `state.agents` | Current/starting role, home/work coordinates, main organization, memberships, support, nine motives, balances/income/needs, knowledge/control/norm/risk beliefs, skill, role history, choices, liabilities, psychology | Exactly 1,000 indexed people; role 0 citizen, 1 business, 2 official, 3 politician; money RU; most traits [0,1], norm [-1,1] |
| Organization `state.orgs` | Category/function, members, leader, location, balance, competence, per-tool baseline caps/legal scope, role-specific practices, media/editorial/record attributes, implementation response/work counters | Integer organization IDs; categories 0–3; normalized capabilities; PM monthly staffing units |
| Support `agent.support` | Directional affinity toward every organization | Organization ID and [0,1] affinity; not formal membership |
| Informal tie `state.links` | Endpoints, directional trust, strength, contact/cooperation/corruption history and dates | Sorted endpoint key; directed trust [0,1]; counts and model months |
| Psychology `agent.psychology` | Learning/openness/retention, experience salience, retained policy memories, attempted/accepted exposures, influence bounds and evolving financial expectations | Versioned per-agent numerical structure; bounded scores, counts, months; see exact object paths below |
| Reform `state.policies` | Formal status, legal scope, mobilization rate, setup/recurring cash and staff requirements, allocations, delivery/install progress, response/review history | Policy keys; RU/PM/month; probability/rate [0,1]; normalized progress |
| Service `state.services` | Client, office/official, arrival and progress, status, help/wait experiences | IDs, month, work/progress; explicit queue, not a headline national statistic |
| Conduct `state.conduct` | True modeled act, participants, kind, amount, evidence, timing and subsequent records | Ground truth for engine; not automatically public knowledge |
| Case `state.cases` | Allegation/evidence, suspect, stage/status, responsible route, work, deadlines, liability/consequences and communication | Multi-stage process with separate true/false allegation and decision; counts, PM, RU, months |
| Information / funding | Claims, outlets, source trust, circulation/corrections, grants/transfers and dependency | Bounded credibility/reach, monetary RU, actual messages; not omniscient prevalence |
| Politics / budget | Controller/governing organization, review calendar, proposals, treasury/outside account | Person/organization identities, relative months, RU; simplified authority |
| Observation `sim.monitor` | Output counters, sampled conditions/outcomes, starting snapshot, monthly history and event links | Separate observation sidecar; must not influence decisions or consume event draws |

One step is one month and contains multiple opportunities. Run duration is 6–240 months; reconstructed history is months -12 through 0. Time is an update scale, not a literal duration for every encounter. Geography is the unit square; analytical map coordinates are a separate representation. One normalized resource unit (RU) is not a currency amount or per-capita GDP unit. PM is a normalized person-month staffing unit, not measured national employment. No expansion weights make the synthetic 1,000 a national census.

Arrays/indexed IDs and references are validated when initial states are constructed/imported. The [state and assignment inventory](STATE.html) lists object definitions and writes with exact source expressions. It is a source-derived field/assignment dictionary, not an assurance that saved arbitrary data are authentic. Internal `knowledge`, perceived knowledge, operational capability and reported percentages are different variables; follow the named accessors in the submodels.

## 3. Process overview and scheduling

Initialization validates setup → generates country-informed agents/organizations → runs the existing-rule pre-policy year → preserves people, cash, history, unfinished services/cases and relationships → resets intervention accounting → saves the common initial society → constructs paired reform/baseline simulations → captures initial observation → adopts additional reforms in the reform branch. The baseline retains inherited institutions.

Each `Simulation.step()` performs the following **in this exact order**:

1. Advance the month and open shared person-time, monetary and stock-flow accounting.
2. Advance personal adaptation and retained influence decay.
3. Pay actual employer compensation and ordinary operating costs from named accounts.
4. Fund reforms; schedule staff, contacts and upkeep; perform maintenance, repair or rebuilding.
5. Implement reform work and synchronize actual personal time; learn from receipts.
6. Generate ordered, repeatable contacts; process service work and synchronize time.
7. Audit/select cases, perform case work and collect liabilities; synchronize time.
8. Circulate information; make funding, membership and organizational choices; conduct political review.
9. Process constrained governance proposals, costly coalitions and responses; review budgets.
10. Deliver demand-constrained production, process investment work and tax liabilities; close the economic and stock-flow record.
11. Recover integrity only under the existing meaningful-choice conditions; record macro developments, metrics and passive reporting.

The order is causally material: this month's funding affects this month's implementation, which may affect later opportunities and reports. Later communication can affect future choices, not an earlier completed choice. Within methods, loops and keyed draws define ordering. [Source](source/model.js.html) and the action catalogue expose those details. Worker execution advances reform then baseline with shared keyed event namespaces, not one mutable random cursor. Repetitions reconstruct paired branches from the same initial society with a changed replicate key; rendering pace is not a parameter of choice.

## 4. Design concepts

Decisions combine subjective consequential evaluation using nine motivational attachments, relevant-role expectations, perceived control and random utility; the highest sampled subjective utility wins among feasible supplied options. Mechanical accounting and case-work progress do not themselves choose. World completion probabilities can differ from perceived feasibility. Observation/reporting has access to truth for measurement, but agent information is limited to experience and accessed claims.

Organizations and networks constrain interaction and resources; role expectations and experience can ease familiar practice. Slow feedback changes receptiveness and motives. Aggregate behavior, information, implementation and resource pressure feed into macro developments and political/budget review. These are coupled stocks, flows and delayed feedback inside an agent model, now include an endogenous domestic-value-added index, while national calibration, demographic growth and a complete macroeconomic sector remain outside the verified scope.

Randomness is reproducible and keyed by explicit seed, replicate, month, process and actor/action keys. A probability range still produces one draw per keyed event; reusing all keys repeats that draw. New event seeds vary subsequent events while initial-seed/country/conditions preserve the starting society. Structural interventions can change which opportunities happen, so shared keys reduce noise without guaranteeing identical encounter paths.

## 5. Initialization

No policy selections or runtime event seed enter the common initial-society identity. Country, overridden starting conditions and initial seed do. Existing organizations, inherited capabilities, finite balances and explicit people are generated from source-informed mappings plus declared priors. Twelve months of existing-rule encounters, service/case work, learning and information generate prehistory. This creates actual modeled corrupt histories and heterogeneous ties; it is neither a backcast fitted to observed prevalence nor equilibrium initialization. See AK-INI-01, AK-COU-01 and [input tables](INPUTS.html).

## 6. Input data and parameters

Country data and institutional notes live in `profiles.js`; rescaling and limited inherited-instrument mappings in `baseline.js`; composition, organizational routing, cycles and costs in `config.js`; cognitive policy ceilings in `adaptation.js`. The generator reproduces their values and source dates in the [input inventory](INPUTS.html). All literal coefficients, numeric thresholds and numeric expressions in active JavaScript appear in the [numeric inventory](NUMERICS.html), with source context and mechanism ownership. Counts, indices, UI geometry and hash constants are not all substantive empirical parameters; the inventory labels this distinction rather than assigning fictitious empirical provenance.

Parameters without a stated observation or calibrated estimate remain engineering priors. Policy-specific influence maxima are fractions of the targeted remaining scale, filtered by uptake, receptiveness, delivery, novelty and retention; they are not guaranteed percentage-point changes in corruption prevalence. Country source values are dated descriptors/proxies, not encounter/sanction probabilities. Changing a source value, mapping or coefficient changes the experiment and must be versioned and tested.

## 7. Submodels and operational definitions

Each mechanism below supplies its numerical rule, source references, inherited design decisions, limits and relevant checks. Every accepted rule has a route in the crosswalk, but a route may end at a documented gap rather than complete conformance. Use [action consequences](ACTIONS.html), [state fields](STATE.html) and [full code](SOURCE-INDEX.html) for exact expressions that would be unwieldy to repeat in prose.
