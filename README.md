# Formvalidation
Form validation is a way for you to tell the user what kind of input is required in each field and allows you to notify the user when the input is incorrect.

There are many ways to do form validation, but in this assignment you will write a plugin (in Javascript) that displays information/error messages besides the input fields.

The validation rules are as follows:
The username field must contain only alphanumeric characters.
The password field should be at least six characters long. 
The email field should be a valid email address (abc@def.xyz).
A valid email consists of an email prefix and an email domain. 
The prefix appears to the left of the @ symbol and domain appears to the right of the @ symbol.

When the page is fully loaded, you should insert a <span> notification element immediately after each form field. The notification elements should initially be hidden.
When the field is currently being edited, the notification element’s text should be infoMessage (i.e. password should include at least six characters), its class should be “info”, and it should be visible.

When the field is not being edited:
• If the field is empty, the notification element should be hidden.
• If the field is non-empty and the form field validates, the notification element’s text should be “OK”, its class should be “ok”, and it should be visible.
• If the field is non-empty and the form field does not validate, the notification element’s text should be “Error”, its class should be “error”, and it should be visible
