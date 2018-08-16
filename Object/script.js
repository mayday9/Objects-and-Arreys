var cellPhone = {
    model: "Redmi Note 5",
    brend: "Xiaomi",
    year: 2018,
    cpu: "Qualcom",
    cpuCores: 8,
    memory: 32,
    gpu: "Adreno 509",
    system: "miui 9.5",
    fingerprint: true,
    displaySize: 6,

    ring: function () {
        return "Dziiiiiinnnnn!!!!";
    },
    sms: function () {
        return "Dilin-Dilin!!"
    },
    interNet: function () {
        return "2G, 3G, 4G all working"
    },
    aboutSellPhone: function () {
        console.log(this.model, this.brend, this.year);
    },
    gpuInfo: function () {
        console.log(this.cpu, this.cpuCores);
    },
    isItNewModel: function () {
        if(this.year >= 2018){
            return true;
        } else {return false;}
    },
    largeDisplay: function () {
        if(this.displaySize >=5) {
            return "large!";
        } else if (this.displaySize < 5 && this.displaySize >= 4) {
            return "middle!";
        } else {return "small"}
    },
    fingerprintStat: function () {
        return "Is fingerprint a cool finction? No, это понты для приезжих!";
    },
    memVersion: function () {
        return "Exists 32 and 64MB versions";
    },
    guarantee: function () {
        return "Pay more 30 dollars and You'll get guarantee"
    },

};

// console.log(cellPhone.ring());
// cellPhone.aboutSellPhone();
// console.log(cellPhone.isItNewModel());
// console.log(cellPhone.largeDisplay());
