import { createClient } from "./supabase/server-props";
export const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getUserSession = async (context) => {
    const supabase = createClient(context);

    const {
        data: { user }
    } = await supabase.auth.getUser();

    return user;
}