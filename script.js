// Password Generator
$(document).ready(function () {
    // console.log($)
    const btn = $('#generate');
    const showPass = $('#showPass')

    // Password Class
    class Password {
        constructor() { }

        funnyPassword() {
            btn.click(function (e) {
                e.preventDefault();
                let arr = Math.floor(Math.random() * 29); arr = Number.parseInt(arr)
                let funnyPass = ["PasswordDown", "NothingHere", "EnterCaptcha", "IForgot", "User", "NewPassword", "ChangeMe", "NothingAgain", "SecretUser", "INeedAPassword", "PasswordDoctor", "RightClick", "CantreMember", "MasterPassword", "PasswordComplete", "ThisIsStrong", "LoveMyKitten", "SuperHardPassword", "VeryStrongPassword", "BestPasswordEver", "DoNotUseMyPassword", "FreeWifi", "WirelessDrop", "BoringUser", "CoolKatz", "BigMommasBack", "YellowNinjas", "StarTrek", "SlowTurtle"][arr]

                showPass.val(funnyPass)
            })
        }

        strongPassword() {
            btn.click(function (e) {
                e.preventDefault();

                let arr1G = Math.random() * 13; arr1G = Number.parseInt(arr1G);
                let arr1 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"][arr1G];

                let arr2G = Math.random() * 26; arr2G = Number.parseInt(arr2G);
                let arr2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"][arr2G];

                let arr3G = Math.random() * 5; arr3G = Number.parseInt(arr3G);
                let arr3 = [0, 1, 2, 3, 4][arr3G];

                let arr4G = Math.random() * 3; arr4G = Number.parseInt(arr4G);
                let arr4 = ["@", "#", "$"][arr4G]

                let arr5G = Math.random() * 5; arr5G = Number.parseInt(arr5G);
                let arr5 = [5, 6, 7, 8, 9][arr5G]

                let arr6G = Math.random() * 13; arr6G = Number.parseInt(arr6G);
                let arr6 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"][arr6G]

                let arr7G = Math.random() * 2; arr7G = Number.parseInt(arr7G);
                let arr7 = ["&", "*"][arr7G]

                let add = arr1 + arr2 + arr3 + arr4 + arr5 + arr6 + arr7;

                showPass.val(add)
            })
        }

        veryStrongPassword() {
            btn.click(function (e) {
                e.preventDefault();

                let arr1G = Math.random() * 9; arr1G = Number.parseInt(arr1G);
                let arr1 = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"][arr1G]

                let arr2G = Math.random() * 4; arr2G = Number.parseInt(arr2G);
                let arr2 = [6, 7, 8, 9][arr2G]

                let arr3G = Math.random() * 9; arr3G = Number.parseInt(arr3G);
                let arr3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"][arr3G]

                let arr4G = Math.random() * 3; arr4G = Number.parseInt(arr4G);
                let arr4 = ["@", "#", "$"][arr4G]

                let arr5G = Math.random() * 8; arr5G = Number.parseInt(arr5G);
                let arr5 = ["s", "t", "u", "v", "w", "x", "y", "z"][arr5G]

                let arr6G = Math.random() * 3; arr6G = Number.parseInt(arr6G);
                let arr6 = [3, 4, 5][arr6G]

                let arr7G = Math.random() * 9; arr7G = Number.parseInt(arr7G);
                let arr7 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"][arr7G]

                let arr8G = Math.random() * 2; arr8G = Number.parseInt(arr8G);
                let arr8 = ["%", "^"][arr8G]

                let arr9G = Math.random() * 8; arr9G = Number.parseInt(arr9G);
                let arr9 = ["S", "T", "U", "V", "W", "X", "Y", "Z"][arr9G]

                let arr10G = Math.random() * 9; arr10G = Number.parseInt(arr10G);
                let arr10 = ["j", "k", "l", "m", "n", "o", "p", "q", "r"][arr10G]

                let arr11G = Math.random() * 3; arr11G = Number.parseInt(arr11G);
                let arr11 = ["&", "*", "!"][arr11G]

                let arr12G = Math.random() * 3; arr12G = Number.parseInt(arr12G);
                let arr12 = [0, 1, 2][arr12G]

                let add = arr1 + arr2 + arr3 + arr4 + arr5 + arr6 + arr7 + arr8 + arr9 + arr10 + arr11 + arr12;

                showPass.val(add)
            })
        }
    }

    // Instances of class in Use of getting the Desired Password

    $('#generate').click(function (e) {
        e.preventDefault()

        const funny = $('input[type=radio]:checked')
        const strong = $('input[type=radio]:checked')
        const veryStrong = $('input[type=radio]:checked')

        if (funny.val() == 'funny') {
            let pass = new Password()
            pass.funnyPassword()
        }

        else if (strong.val() == 'strong') {
            let pass = new Password()
            pass.strongPassword()
        }

        else if (veryStrong.val() == 'veryStrong') {
            let pass = new Password()
            pass.veryStrongPassword()
        }
    })


    // Copy to clipboard Functionality

    $('#img').click(function (e) {
        // Select the text field
        document.getElementById('showPass').select();
        document.getElementById('showPass').setSelectionRange(0, 999);
        // This method didn't work in jQuery so we did that
        // showPass.select();
        // showPass.setSelectionRange(0, 99999);

        // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(showPass.val());

        // Alert the copied text
        alert("Password Copied:  " + showPass.val());
    })

})