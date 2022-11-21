const typeUser="admin" // user, guest, bot

switch (typeUser) {
    case 'admin':
        console.log('You are admin');
        break;
    case 'user':
        console.log('You are user');
        break;
    case 'bot':
        console.log('you are bot');
        break;
        default:
         console.log('Who are you?');
         break;
}
   