// For Ipad and Computer Screen
// Work 
const WorkHours = document.querySelector('.Containers-Work .Containers-Work-Text .context .text-Title + p');
const WorkpreviousHours = document.querySelector('.Containers-Work .Containers-Work-Text .context  .text-Title + p +p');
// Play
const PlayHours = document.querySelector('.Containers-Play .Containers-Play-Text .context .text-Title +p');
const PlaypreviousHours = document.querySelector('.Containers-Play .Containers-Play-Text .context .text-Title +p+p');

// Study
const StudyHours = document.querySelector('.Containers-Study .Containers-Study-Text .context .text-Title +p');
const StudypreviousHours = document.querySelector('.Containers-Study .Containers-Study-Text .context .text-Title +p+p');
// console.log(StudypreviousHours.innerHTML)

// Exercise
const ExerciseHours = document.querySelector('.Containers-Exercise .Containers-Exercise-Text .context .text-Title +p');
const ExercisepreviousHours = document.querySelector('.Containers-Exercise .Containers-Exercise-Text .context .text-Title +p+p');
// console.log(ExercisepreviousHours.innerHTML)

// Social
const socialHours = document.querySelector('.Containers-social .Containers-social-Text .context .text-Title +p');
const socialpreviousHours = document.querySelector('.Containers-social .Containers-social-Text .context .text-Title +p+p');
// console.log(socialpreviousHours.innerHTML)

// Self-Care
const SelfCareHours = document.querySelector('.Containers-Self-Care .Containers-Self-Care-Text .context .text-Title +p');
const SelfCarepreviousHours = document.querySelector('.Containers-Self-Care .Containers-Self-Care-Text .context .text-Title +p+p');
// console.log(SelfCarepreviousHours.innerHTML)


// for Mobile Screen
// Work
const WorkHoursMob = document.querySelector('.Containers-Work .Containers-Work-Text .context .mediaqueryMobile p:nth-child(1)');
const WorkpreviousHoursMob = document.querySelector('.Containers-Work .Containers-Work-Text .context .mediaqueryMobile p:nth-child(2)');
// console.log(WorkpreviousHoursMob.innerHTML)

// Play
const PlayHoursMob = document.querySelector('.Containers-Play .Containers-Play-Text .context .mediaqueryMobile p:nth-child(1)');
const PlaypreviousHoursMob = document.querySelector('.Containers-Play .Containers-Play-Text .context .mediaqueryMobile p:nth-child(2)');
// console.log(PlaypreviousHoursMob.innerHTML)

// Study
const StudyHoursMob = document.querySelector('.Containers-Study .Containers-Study-Text .context .mediaqueryMobile p:nth-child(1)');
const StudypreviousHoursMob = document.querySelector('.Containers-Study .Containers-Study-Text .context .mediaqueryMobile p:nth-child(2)');
// console.log(StudyHoursMob.innerHTML)

// Exercise
const ExerciseHoursMob = document.querySelector('.Containers-Exercise .Containers-Exercise-Text .context .mediaqueryMobile p:nth-child(1)');
const ExercisepreviousHoursMob = document.querySelector('.Containers-Exercise .Containers-Exercise-Text .context .mediaqueryMobile p:nth-child(2)');
// console.log(ExerciseHoursMob.innerHTML)

// Social
const socialHoursMob = document.querySelector('.Containers-social .Containers-social-Text .context .mediaqueryMobile p:nth-child(1)');
const socialpreviousHoursMob = document.querySelector('.Containers-social .Containers-social-Text .context .mediaqueryMobile p:nth-child(2)');
// console.log(socialHoursMob.innerHTML)

// Self-Care
const SelfCareHoursMob = document.querySelector('.Containers-Self-Care .Containers-Self-Care-Text .context .mediaqueryMobile p:nth-child(1)');
const SelfCarepreviousHoursMob = document.querySelector('.Containers-Self-Care .Containers-Self-Care-Text .context .mediaqueryMobile p:nth-child(2)');
// console.log(SelfCareHoursMob.innerHTML)


// Fetch Data
// Async
const getData = async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data;
}
// For Mobile Screen
const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
    const btn = document.querySelector('.Containers-leftSide .buttons');
    btn.addEventListener('click', (e) => {
        btnClick = e.target.innerHTML;
        if (btnClick === 'Weekly') {
            getData().then(data => {
                console.log('data', data)
                // Current
                WorkHoursMob.textContent = data[0]['timeframes']['weekly']['current'] + 'Hrs';
                PlayHoursMob.textContent = data[1]['timeframes']['weekly']['current'] + 'Hrs';
                StudyHoursMob.textContent = data[2]['timeframes']['weekly']['current'] + 'Hrs';
                ExerciseHoursMob.textContent = data[3]['timeframes']['weekly']['current'] + 'Hrs';
                socialHoursMob.textContent = data[4]['timeframes']['weekly']['current'] + 'Hrs';
                SelfCareHoursMob.textContent = data[5]['timeframes']['weekly']['current'] + 'Hrs';
                // previous
                WorkpreviousHoursMob.textContent = `Yesterday - ${data[0]['timeframes']['weekly']['previous']}hrs`;
                PlaypreviousHoursMob.textContent = `Yesterday - ${data[1]['timeframes']['weekly']['previous']}hrs`;
                StudypreviousHoursMob.textContent = `Yesterday - ${data[2]['timeframes']['weekly']['previous']}hrs`;
                ExercisepreviousHoursMob.textContent = `Yesterday - ${data[3]['timeframes']['weekly']['previous']}hrs`;
                socialpreviousHoursMob.textContent = `Yesterday - ${data[4]['timeframes']['weekly']['previous']}hrs`;
                SelfCarepreviousHoursMob.textContent = `Yesterday - ${data[5]['timeframes']['weekly']['previous']}hrs`;
            }).catch(err => { console.log(err) })
        }
        else if (btnClick === 'Monthly') {
            getData().then(data => {
                // Current
                WorkHoursMob.textContent = data[0]['timeframes']['monthly']['current'] + 'Hrs';
                PlayHoursMob.textContent = data[1]['timeframes']['Monthly']['current'] + 'Hrs';
                StudyHoursMob.textContent = data[2]['timeframes']['Monthly']['current'] + 'Hrs';
                ExerciseHoursMob.textContent = data[3]['timeframes']['Monthly']['current'] + 'Hrs';
                socialHoursMob.textContent = data[4]['timeframes']['Monthly']['current'] + 'Hrs';
                SelfCareHoursMob.textContent = data[5]['timeframes']['Monthly']['current'] + 'Hrs';
                // previous
                WorkpreviousHoursMob.textContent = `Yesterday - ${data[0]['timeframes']['Monthly']['previous']}hrs`;
                PlaypreviousHoursMob.textContent = `Yesterday - ${data[1]['timeframes']['Monthly']['previous']}hrs`;
                StudypreviousHoursMob.textContent = `Yesterday - ${data[2]['timeframes']['Monthly']['previous']}hrs`;
                ExercisepreviousHoursMob.textContent = `Yesterday - ${data[3]['timeframes']['Monthly']['previous']}hrs`;
                socialpreviousHoursMob.textContent = `Yesterday - ${data[4]['timeframes']['Monthly']['previous']}hrs`;
                SelfCarepreviousHoursMob.textContent = `Yesterday - ${data[5]['timeframes']['Monthly']['previous']}hrs`;
            }).catch(err => { console.log(err) })
        }
        else {
            getData().then(data => {
                // Current
                WorkHoursMob.textContent = data[0]['timeframes']['daily']['current'] + 'Hrs';
                PlayHoursMob.textContent = data[1]['timeframes']['daily']['current'] + 'Hrs';
                StudyHoursMob.textContent = data[2]['timeframes']['daily']['current'] + 'Hrs';
                ExerciseHoursMob.textContent = data[3]['timeframes']['daily']['current'] + 'Hrs';
                socialHoursMob.textContent = data[4]['timeframes']['daily']['current'] + 'Hrs';
                SelfCareHoursMob.textContent = data[5]['timeframes']['daily']['current'] + 'Hrs';
                // previous
                WorkpreviousHoursMob.textContent = `Yesterday - ${data[0]['timeframes']['daily']['previous']}hrs`;
                PlaypreviousHoursMob.textContent = `Yesterday - ${data[1]['timeframes']['daily']['previous']}hrs`;
                StudypreviousHoursMob.textContent = `Yesterday - ${data[2]['timeframes']['daily']['previous']}hrs`;
                ExercisepreviousHoursMob.textContent = `Yesterday - ${data[3]['timeframes']['daily']['previous']}hrs`;
                socialpreviousHoursMob.textContent = `Yesterday - ${data[4]['timeframes']['daily']['previous']}hrs`;
                SelfCarepreviousHoursMob.textContent = `Yesterday - ${data[5]['timeframes']['daily']['previous']}hrs`;
            }).catch(err => { console.log(err) })
        }
    })
}

// Buttons
const btn = document.querySelector('.Containers-leftSide .buttons');
btn.addEventListener('click', (e) => {
    btnClick = e.target.innerHTML;
    if (btnClick === 'Weekly') {
        getData().then(data => {
            console.log('data', data)
            // Current
            WorkHours.textContent = data[0]['timeframes']['weekly']['current'] + 'Hrs';
            PlayHours.textContent = data[1]['timeframes']['weekly']['current'] + 'Hrs';
            StudyHours.textContent = data[2]['timeframes']['weekly']['current'] + 'Hrs';
            ExerciseHours.textContent = data[3]['timeframes']['weekly']['current'] + 'Hrs';
            socialHours.textContent = data[4]['timeframes']['weekly']['current'] + 'Hrs';
            SelfCareHours.textContent = data[5]['timeframes']['weekly']['current'] + 'Hrs';
            // previous
            WorkpreviousHours.textContent = `Yesterday - ${data[0]['timeframes']['weekly']['previous']}hrs`;
            PlaypreviousHours.textContent = `Yesterday - ${data[1]['timeframes']['weekly']['previous']}hrs`;
            StudypreviousHours.textContent = `Yesterday - ${data[2]['timeframes']['weekly']['previous']}hrs`;
            ExercisepreviousHours.textContent = `Yesterday - ${data[3]['timeframes']['weekly']['previous']}hrs`;
            socialpreviousHours.textContent = `Yesterday - ${data[4]['timeframes']['weekly']['previous']}hrs`;
            SelfCarepreviousHours.textContent = `Yesterday - ${data[5]['timeframes']['weekly']['previous']}hrs`;
        }).catch(err => { console.log(err) })
    }
    else if (btnClick === 'Monthly') {
        getData().then(data => {
            // Current
            WorkHours.textContent = data[0]['timeframes']['monthly']['current'] + 'Hrs';
            PlayHours.textContent = data[1]['timeframes']['Monthly']['current'] + 'Hrs';
            StudyHours.textContent = data[2]['timeframes']['Monthly']['current'] + 'Hrs';
            ExerciseHours.textContent = data[3]['timeframes']['Monthly']['current'] + 'Hrs';
            socialHours.textContent = data[4]['timeframes']['Monthly']['current'] + 'Hrs';
            SelfCareHours.textContent = data[5]['timeframes']['Monthly']['current'] + 'Hrs';
            // previous
            WorkpreviousHours.textContent = `Yesterday - ${data[0]['timeframes']['Monthly']['previous']}hrs`;
            PlaypreviousHours.textContent = `Yesterday - ${data[1]['timeframes']['Monthly']['previous']}hrs`;
            StudypreviousHours.textContent = `Yesterday - ${data[2]['timeframes']['Monthly']['previous']}hrs`;
            ExercisepreviousHours.textContent = `Yesterday - ${data[3]['timeframes']['Monthly']['previous']}hrs`;
            socialpreviousHours.textContent = `Yesterday - ${data[4]['timeframes']['Monthly']['previous']}hrs`;
            SelfCarepreviousHours.textContent = `Yesterday - ${data[5]['timeframes']['Monthly']['previous']}hrs`;
        }).catch(err => { console.log(err) })
    }
    else {
        getData().then(data => {
            // Current
            WorkHours.textContent = data[0]['timeframes']['daily']['current'] + 'Hrs';
            PlayHours.textContent = data[1]['timeframes']['daily']['current'] + 'Hrs';
            StudyHours.textContent = data[2]['timeframes']['daily']['current'] + 'Hrs';
            ExerciseHours.textContent = data[3]['timeframes']['daily']['current'] + 'Hrs';
            socialHours.textContent = data[4]['timeframes']['daily']['current'] + 'Hrs';
            SelfCareHours.textContent = data[5]['timeframes']['daily']['current'] + 'Hrs';
            // previous
            WorkpreviousHours.textContent = `Yesterday - ${data[0]['timeframes']['daily']['previous']}hrs`;
            PlaypreviousHours.textContent = `Yesterday - ${data[1]['timeframes']['daily']['previous']}hrs`;
            StudypreviousHours.textContent = `Yesterday - ${data[2]['timeframes']['daily']['previous']}hrs`;
            ExercisepreviousHours.textContent = `Yesterday - ${data[3]['timeframes']['daily']['previous']}hrs`;
            socialpreviousHours.textContent = `Yesterday - ${data[4]['timeframes']['daily']['previous']}hrs`;
            SelfCarepreviousHours.textContent = `Yesterday - ${data[5]['timeframes']['daily']['previous']}hrs`;
        }).catch(err => { console.log(err) })
    }
})


// Using Fetch
// fetch('/data.json').then((response) => {
//     return response.json();
// }).then((data => {
//     console.log(data)
// }))
//     .catch(err => { console.log(err) })

// Using Promise
// const getTodos = (res) => {
//     return new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();
//         req.addEventListener('readystatechange', () => {
//             if (req.readyState === 4 && req.status === 200) {
//                 const data = JSON.parse(req.responseText)
//                 resolve(data);
//             }
//             else if (req.readyState === 4) {
//                 reject('error')
//             }
//         })
//         req.open('GET', res);
//         req.send();
//     })
// }
// getTodos('/data.json').then((data) => { console.log(data) })