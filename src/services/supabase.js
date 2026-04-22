import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pacltkczfrefcixgwiql.supabase.co";
const supabaseKey = "sb_publishable_3JFcYyCctH7J6Y5KBHhzkg_Tf6jyXeg";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
