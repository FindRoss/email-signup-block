<?php
function email_signup_register_settings() {
    register_setting('email_signup_options_group', 'email_signup_api_key');
    register_setting('email_signup_options_group', 'email_signup_campaign_id');
}

function email_signup_add_options_page() {
    add_options_page(
        'Email Signup Settings',           // Page title
        'Email Signup',                    // Menu title
        'manage_options',                  // Capability required
        'chaser-email-signup',                    // Menu slug
        'email_signup_render_options_page' // Callback function
    );
}

function email_signup_render_options_page() {
    ?>
    <div class="wrap">
        <h1>Email Signup Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields('email_signup_options_group');
            do_settings_sections('chaser-email-signup');
            ?>
            <table class="form-table">
                <tr>
                    <th scope="row">
                        <label for="email_signup_api_key">API Key</label>
                    </th>
                    <td>
                        <input type="text" id="email_signup_api_key" name="email_signup_api_key"
                               value="<?php echo esc_attr(get_option('email_signup_api_key')); ?>" class="regular-text"/>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label for="email_signup_campaign_id">Campaign ID</label>
                    </th>
                    <td>
                        <input type="text" id="email_signup_campaign_id" name="email_signup_campaign_id"
                               value="<?php echo esc_attr(get_option('email_signup_campaign_id')); ?>" class="regular-text"/>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
    <?php
}

add_action('admin_menu', 'email_signup_add_options_page');
add_action('admin_init', 'email_signup_register_settings');
?>
