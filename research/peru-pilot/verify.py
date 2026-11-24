from pathlib import Path
import hashlib,json,gzip
p=Path(__file__).parent
m=json.loads((p/'run-manifest.json').read_text())
for name,digest in {**m['researchSHA256'],**m['dataSHA256']}.items():
 assert hashlib.sha256((p/name).read_bytes()).hexdigest()==digest,name
pilot=json.loads(gzip.decompress((p/'pilot-results.json.gz').read_bytes()))
assert len(pilot)==40
for label in ['published','candidate']:
 for seed in m['protocol']['holdoutSeeds']:
  runs=[r for r in pilot if r['label']==label and r['seed']==seed]
  assert len(runs)==4 and len({r['initialHash'] for r in runs})==1
  assert all(len(r['rows'])==24 for r in runs)
assert not set(m['protocol']['trainingSeeds'])&set(m['protocol']['holdoutSeeds'])
for r in pilot:
 assert all(p['counts']['agents']==1000 for p in r['rows'])
 assert r['summary']['maxMoneyError']<.0001
print('Research source/data hashes, 40 held-out policy trajectories, disjoint seeds, matched initial states and 1,000-agent counts verified.')
