-- Content model definitions (mirrors your modelInterface objects)
create table content_model (
  uuid text primary key,          -- matches your `uuid` field, e.g. "localizationToken"
  entry_name text not null,       -- "Localization Token"
  fields jsonb not null,          -- the whole `fields` array, verbatim
  created_at timestamptz not null default now(),
  last_updated timestamptz not null default now()
);

-- Entries for any content model
create table content_entry (
  id uuid primary key default gen_random_uuid(),
  model_uuid text not null references content_model(uuid),
  fields jsonb not null default '{}'::jsonb,
  -- shape: { "key": "some.token.key", "value": { "en-US": "Hello", "fr-FR": "Bonjour" } }
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_content_entry_model on content_entry(model_uuid);
create index idx_content_entry_fields_gin on content_entry using gin (fields);