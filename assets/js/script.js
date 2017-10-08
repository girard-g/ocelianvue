jQuery(document).ready(function($) {
    
    const AquaGymColor = '#FECB9C';
    const AquaBikeColor = '#A86C3E';
    const AquaPhobieAdult = '#C8A16D';
    const AquaBikeFree = '#7C431A';
    const BBNageur = '#FD8A36';
    const AquaZumba = '#B65516';
    const Scolaire = '#FAE7CC';

    const EventAquaBike = [
        {
            title:'AquaBike',
            start: '11:00:00',
            end: '12:00:00',
            dow: [ 1, 5 ],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '12:30:00',
            end: '13:30:00',
            dow: [ 1, 3, 5 ],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '14:30:00',
            end: '15:00:00',
            dow: [1],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '17:00:00',
            end: '18:00:00',
            dow: [ 1, 4 ],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '19:15:00',
            end: '20:30:00',
            dow: [ 1, 4 ],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '09:15:00',
            end: '09:45:00',
            dow: [2],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '18:30:00',
            end: '19:00:00',
            dow: [ 2, 5 ],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '18:15:00',
            end: '19:15:00',
            dow: [3],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '08:30:00',
            end: '09:45:00',
            dow: [4],
            backgroundColor:AquaBikeColor
        },
        {
            title:'AquaBike',
            start: '13:15:00',
            end: '13:45:00',
            dow: [6],
            backgroundColor:AquaBikeColor
        }
    ];


    const EventAquaGym = [
        {
            title:'AquaGym',
            start: '09:00:00',
            end: '09:45:00',
            dow: [ 1, 3, 5 ],
            backgroundColor:AquaGymColor
        },
        {
            title:'AquaGym',
            start: '10:00:00',
            end: '10:45:00',
            dow: [ 1, 2, 4, 5 ],
            backgroundColor:AquaGymColor
        },
        {
            title:'AquaGym',
            start: '12:15:00',
            end: '13:00:00',
            dow: [6],
            backgroundColor:AquaGymColor
        },
        {
            title:'AquaGym',
            start: '12:30:00',
            end: '13:15:00',
            dow: [2, 4],
            backgroundColor:AquaGymColor
        },
        {
            title:'AquaGym',
            start: '17:30:00',
            end: '18:15:00',
            dow: [2, 5],
            backgroundColor:AquaGymColor
        },
        {
            title:'AquaGym',
            start: '18:15:00',
            end: '19:00:00',
            dow: [1, 4],
            backgroundColor:AquaGymColor
        },
        {
            title:'AquaGym',
            start: '19:30:00',
            end: '20:15:00',
            dow: [2],
            backgroundColor:AquaGymColor
        }
    ];

    const EventAquaBikeFree = [
        {
            title:'Public AquaBike libre',
            start: '11:00:00',
            end: '12:00:00',
            dow: [2, 3, 4],
            backgroundColor:AquaBikeFree
        }
    ];

    const EventChildLesson = [
        {
            title:'Leçons de natation 4-6 ans',
            start: '10:00:00',
            end: '11:00:00',
            dow: [3],
            backgroundColor:AquaBikeFree
        },
        {
            title:'Leçons de natation 4-6 ans',
            start: '14:00:00',
            end: '18:00:00',
            dow: [3],
            backgroundColor:AquaBikeFree
        },
        {
            title:'Leçons de natation 4-6 ans',
            start: '14:15:00',
            end: '18:00:00',
            dow: [6],
            backgroundColor:AquaBikeFree
        }
    ];

    const EventAquaZumba = [
        {
            title:'AquaZumba',
            start: '19:30:00',
            end: '20:15:00',
            dow: [3],
            backgroundColor:AquaZumba
        }
    ];

    const EventScolaire = [
        {
            title:'Scolaire',
            start: '14:00:00',
            end: '15:30:00',
            dow: [4],
            backgroundColor:Scolaire
        }
    ];

    const EventAquaPhobia = [
        {
            title:'Aquaphobie Adultes',
            start: '09:00:00',
            end: '09:45:00',
            dow: [6],
            backgroundColor:AquaPhobieAdult
        }
    ];

    const EventBB = [
        {
            title:'Bébés nageurs',
            start: '10:00:00',
            end: '11:45:00',
            dow: [6],
            backgroundColor:BBNageur
        }
    ];

    const EventAdult = [
        {
            title:'Leçons Adultes',
            start: '09:00:00',
            end: '09:45:00',
            dow: [0],
            backgroundColor:AquaPhobieAdult
        }
    ];

    const concat = EventAquaBike.concat(
        EventAquaGym,
        EventAquaBikeFree,
        EventChildLesson,
        EventAquaZumba,
        EventScolaire,
        EventAquaPhobia,
        EventBB,
        EventAdult
    );

    $('#calendar').fullCalendar({
        //themeSystem:'bootstrap3',
        defaultView:'agendaWeek',
        timezone:'local',
        timeFormat: 'H(:mm)',
        minTime: "08:00:00",
        maxTime: "21:00:00",
        height: 'auto',
        events:
            concat
        ,

        eventClick: function(calEvent, jsEvent, view) {

            $('.apiresponse').hide();

            $('.modal-title').html(calEvent.title+' - '+calEvent.start.format('Do MMMM YYYY, h:mm:ss a'));
            $('#calendarmodal').modal('toggle');
            $('.loader').show();

            const data = JSON.stringify({date:calEvent.start.format()});
            const token = getCookie('api_token');

            $.ajax({
                method: 'POST',
                url: 'http:/127.0.0.1:8000/available_resources',
                headers: {
                    "Ocelian-Token": token,
                    'Content-Type': 'application/json',
                    'Accept': 'application/ld+json'
                },
                data: data,
                dataType: 'json',
                success: function (data) {
                    const unJson = JSON.parse(data);
                    $('.loader').hide();

                    $('#countbike').html(unJson.countBike);
                    $('#countelliptic').html(unJson.countEllipticBike);
                    $('#countcarpet').html(unJson.countCarpet);

                    $('.apiresponse').show();

                },
                error: function () {
                    $('.loader').hide();
                    $('#apialert').show();

                }
            });




        }
    })
});
