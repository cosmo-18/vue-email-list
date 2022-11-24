const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mails: [],
            numb: ''
        }
    },
    methods:{
        generateMail(){
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response)

                console.log(this.mails.length);
                
                if(this.numb == this.mails.length){
                    this.$nextTick(()=>{
                        this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})

                        console.log(this.$refs.adress[this.$refs.adress.length-1])
                    })
                }
            });
        },
        generateMails(){
            this.mails=[];
            for(let i =0; i<this.numb;i++){
                this.generateMail();
            }
        },
        addMail(){
            this.numb++;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response)

                console.log(this.mails.length);

                if(this.numb == this.mails.length){
                        this.$nextTick(()=>{
                        this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})

                        console.log(this.$refs.adress[this.$refs.adress.length-1])
                    })
                }
            });
        }
    }
})
app.mount('#app');