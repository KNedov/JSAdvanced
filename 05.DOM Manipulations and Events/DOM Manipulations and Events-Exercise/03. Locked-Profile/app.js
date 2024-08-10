function lockedProfile() {
    const profiles = Array.from(document.getElementsByClassName('profile'));
    for (const profile of profiles) {
        const showInfo = profile.querySelector('button')
        showInfo.addEventListener('click', showMore);

        function showMore() {
            const hiden = profile.getElementsByTagName('div')[0];
            const profileStatus = profile.querySelectorAll('input[type="radio"]');
            if(showInfo.textContent == 'Hide it' && profileStatus[0].checked === false){
                hiden.style.display = 'none';
                showInfo.textContent = 'Show more';
            }else{
                if(!profileStatus[0].checked){
                    hiden.style.display = 'block';
                    showInfo.textContent = 'Hide it';
                }
            }

        }
        
    }

}