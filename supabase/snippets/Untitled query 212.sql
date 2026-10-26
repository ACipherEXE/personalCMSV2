create table content_model (
  uuid text primary key,
  entry_name text not null unique,
  fields jsonb not null,
  created_at timestamptz not null default now(),
  last_updated timestamptz not null default now()
);

create table content_entry (
  id uuid primary key default gen_random_uuid(),
  model_uuid text not null references content_model(uuid),
  model_name text not null references content_model(entry_name),
  name text not null,
  fields jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_content_entry_model on content_entry(model_uuid);
create index idx_content_entry_fields_gin on content_entry using gin (fields);