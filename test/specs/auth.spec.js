import LoginPage from  '../../pages/login.page';
import ProfilePage from '../../pages/profile.page';

describe('Auth', () => {
    it('successful log in', async () => {
        await LoginPage.open();
        await LoginPage.login('muraways@gmail.com', 'Nj3y2ux3kbNtMJX');
        await expect(ProfilePage.iconAvatar).toBeDisplayed();
    });
});


