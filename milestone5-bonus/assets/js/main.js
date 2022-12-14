

const {createApp} = Vue;

createApp({
    data(){
        return{
            contacts : [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeIndex : 0,
            newMessage : "",
            search : "",
            
        }
    },
    methods : {
        setActiveIndex(i){
            this.activeIndex = i
        },
        sendMessage(i){
            var DateTime = luxon.DateTime;
            const dt = DateTime.now();
            console.log(dt);    
            const newObjectSent = {
                date: `${dt.hour}:${dt.minute}` ,
                message: this.newMessage,
                status: 'sent'
            }
            const newObjectReceived = {
                date: `${dt.hour}:${dt.minute}` ,
                message: "ok",
                status: 'received'
            }
            this.contacts[i].messages.push(newObjectSent)
            this.newMessage = ""
            setTimeout(()=>{
                this.contacts[i].messages.push(newObjectReceived)
            },1000)
            this.contacts[i].hour = `${dt.hour}:${dt.minute}`
            
           
        },
        searchChat(){
            //vedere se name contiene i caratteri che ho scritto nell'input
            //se si setto visible su true altrimenti su false

            this.contacts.forEach((contact,i) => { 
                //console.log(this.contacts[i]); 
                const lowerName = this.contacts[i].name.toLowerCase() 
                if (lowerName.includes(this.search.toLowerCase())) {
                    console.log("sono dentro l'if");
                    this.contacts[i].visible = true
                }else{
                    console.log("sono dentro l'else");
                    this.contacts[i].visible = false
                }
            });
    
        },
        setMessageMenu(activeIndex,x){
            //console.log(this.contacts[activeIndex].messages[x]);
            if (this.contacts[activeIndex].messages[x].menu === true) {
                this.contacts[activeIndex].messages[x].menu = false
            }else{
                this.contacts[activeIndex].messages[x].menu = true
            }
            //console.log(this.contacts[activeIndex].messages[x]);
        },
        deleteMessage(activeIndex,x){
            this.contacts[activeIndex].messages[x].message = "This message has been deleted";
            let messageEl = document.querySelectorAll(".right_body .message")
            console.log(messageEl[x]);
            setTimeout(()=> {
                messageEl[x].classList.add("d-none")
            },1000)
            
        }
    }
}).mount("#app")




