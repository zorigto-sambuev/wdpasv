import Page from './page';

class LoginPage extends Page {

    get inputEmail() { return $('#normal_login_email') }
    get inputPassword() { return $('#normal_login_password') }
    get battonLogIn() { return $('.login-form-button')}
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.battonLogIn.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/user/login');
    }
}

export default new LoginPage();
