import React from 'react'
import Section from './Section'
import Title from '../common/Title'

function OurTeam() {
    return (
        <div className='mb-40'>
            <Title title={'Nuestro equipo'} textColor={'text-black'} />
            <Section
                title={'Profesores'}
                people={[
                    {
                        name: 'Dr. Miguel Jimeno Paba',
                        img: 'https://media.licdn.com/dms/image/C5603AQGEG3qFyxN2Uw/profile-displayphoto-shrink_100_100/0/1658951618029?e=1676505600&v=beta&t=FhZm-m1fT01Mx7hFwMHTClgcoS0CJmu1UzMjHShLeH8',
                        link: 'https://github.com/majimeno'
                    }, {
                        name: 'Mtr. Karen Villalba Ramos',
                        img: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=Dse7Za4AAAAJ&citpid=21',
                        link: 'https://scholar.google.com/citations?user=Dse7Za4AAAAJ&hl=es'
                    }, {
                        name: 'PhD. Heidy Robles',
                        img: 'https://media.licdn.com/dms/image/C4D03AQFOJXCqIgEsXQ/profile-displayphoto-shrink_200_200/0/1647461565960?e=1676505600&v=beta&t=ro8SxEM7eXYL_-GG1jVl1sZXr-mqhto6UTnpGfbCq7k',
                        link: 'https://www.linkedin.com/in/heydy-selene-robles-noriega-58b73236/?locale=en_US'
                    }
                ]}
            />
            <Section
                title={'Diseñadores'}
                people={[
                    {
                        name: 'Shannon A. Ebratt Ariza',
                        img: 'https://mir-s3-cdn-cf.behance.net/user/115/f9ed0a661387125.62f534e44cf62.jpg',
                        link: 'https://www.behance.net/shannonebratt'
                    },
                ]}
            />
            <Section
                title={'Desarrolladores'}
                people={[
                    {
                        name: 'Camilo J. Sinning Lopez',
                        img: 'https://avatars.githubusercontent.com/u/61607058?v=4',
                        link: 'https://github.com/CamiloSinningUN'
                    },
                    {
                        name: 'Breynner S. Hurtado Acuña',
                        img: 'https://avatars.githubusercontent.com/u/61608216?v=4',
                        link: 'https://github.com/breynner1'
                    },
                    {
                        name: 'Leonardo D. Lizcano Pinto',
                        img: 'https://avatars.githubusercontent.com/u/74639893?v=4',
                        link: 'https://github.com/LeoLizc'
                    },
                ]}
            />
        </div>
    )
}

export default OurTeam