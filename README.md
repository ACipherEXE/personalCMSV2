# personalCMSV2
An open-source CMS (Not finished)

<img width="1361" height="1020" alt="image" src="https://github.com/user-attachments/assets/86427979-a7c4-454f-99d3-bb831943fff3" />

<img width="1368" height="1009" alt="image" src="https://github.com/user-attachments/assets/0f3e2244-b042-47c5-9993-9c0ca312c6c5" />

<img width="1342" height="1601" alt="image" src="https://github.com/user-attachments/assets/748e2cd1-79a5-4388-b6b8-cdbf1e0565a0" />


<img width="1359" height="938" alt="image" src="https://github.com/user-attachments/assets/4189bef1-6c79-4354-9c40-b9e35aef1e09" />

<img width="1333" height="1205" alt="image" src="https://github.com/user-attachments/assets/05d4be7a-34ff-43a8-845a-25afcb5495b6" />

# What is needed?

- Node 24 LTS
- Docker
- Supabase

# How to set up?

In a terminal in the project folder do the following.

- Open Docker
- npm install
- npm install -D supabase
- npx supabase init
- npx supabase start

This should make the terminal spit out some useful info. Copy and paste it on a note.

- Go to the API folder and replace the SUPABASE_URL with the localhost it spit out.

- Open the supabase UX: http://localhost:XXXXX/project/default

- Go to SQL Editor

- Run the following

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

- Now "npm run dev" on a terminal pointing at the project.
- It should open a window or click the link that was provided in the terminal

- Now make Models then make Entries. 




