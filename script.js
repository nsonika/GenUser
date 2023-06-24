const generateUserButton = document.getElementById('generateUser');
const userContainer = document.getElementById('userContainer');



generateUserButton.addEventListener('click', () => {
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const numberOfUsers = document.getElementById('count').value;
    console.log(numberOfUsers)

    // Clear previous user cards
    userContainer.innerHTML = '';

    // fetch random user data based on gender,nationality for specified number of users with api
    for (let i = 0; i < numberOfUsers; i++) {
        fetch(`https://randomuser.me/api/?gender=${gender}&nat=${nationality}`)
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                const fullName = `${user.name.first} ${user.name.last}`;
                const email = user.email;
                const username = user.login.username;
                const avatar = user.picture.large;

                // create user card
                const userCard = `
                    <div class='user'>
                        <button class="copyButton" onclick="copyToClipboard(this)">Copy</button>
                        <div class="copy-popup">Copied!</div>
                        <img src="${avatar}" alt="User Avatar">
                        <h2>${fullName}</h2>
                        <p>Email: ${email}</p>
                        <p>Username: ${username}</p>
                    </div>
                `;

                // append user card to userContainer
                userContainer.innerHTML += userCard;
            })
            .catch(error => console.log(error));
    }
});

