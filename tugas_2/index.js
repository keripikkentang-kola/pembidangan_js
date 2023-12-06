import { uang, nasabahSatu, nasabahDua } from "./state.js";

class Bank {
    namaBank = "Bank bangtut"
    nasabah
    saldo
    constructor(pin, tf, nominalTf = 0, jenisUang = 100000){
        this.pin = pin
        this.tf = tf
        this.nominalTf = nominalTf
        this.jenisUang = jenisUang
    }

    masuk() {
        console.log("Selamat Datang di " + this.namaBank)
        console.log("Silahkan masukkan pin anda")
        console.log("Pin: ******")
        switch(this.pin){
            case 123456:
                console.log("Selamat datang " + nasabahSatu.nama)
                this.nasabah = nasabahSatu.nama
                break
            case 123457:
                console.log("selamat datang " + nasabahDua.nama)
                this.nasabah = nasabahDua.nama
                break
            case 123458:
                console.log("dih default")
                break
        }
             
    }

    cekSaldo() {
        console.log("--------CEK SALDO--------")
        console.log("Silahkan periksa saldo anda")
        if(this.nasabah == "Nabila") {
            console.log("Hai Nabila saldo anda sekarang: " + nasabahSatu.saldo)
            this.saldo = nasabahSatu.saldo
        } else if(this.nasabah == "Dhiyaa") {
            console.log("Hai Dhiyaa saldo anda sekarang: " + nasabahDua.saldo)
            this.saldo = nasabahDua.saldo
        } else {
            console.log("Tidak tersedia")
        }
    }
    
    transfer() {
        console.log("--------TRANSFER--------")
        console.log("Apakah anda ingin transfer?")
        console.log(this.tf)
        switch(this.tf){
            case true:
                console.log("Silahkan masukkan nominal")
                console.log(this.nominalTf)
                if(this.jenisUang === uang.seratusRibu) {
                    if(this.nominalTf % 100000 == 50000) {
                        console.log("Hanya melayani pecahan 100.000")
                    }
                    if(this.nominalTf % 100000 == 0) {
                        if(this.nominalTf <= this.saldo) {
                            console.log("Transfer berhasil")
                            this.saldo = this.saldo - this.nominalTf
                            console.log("Saldo anda sekarang = " + this.saldo)
                        } else if(this.nominalTf > this.saldo) {
                            console.log("Saldo anda kurang, isi dulu")
                        } else {
                            console.log("Isi dulu nominalnya bambang")
                        }
                    }
                } else if(this.jenisUang === uang.limaPuluhRibu) {
                    if(this.nominalTf % 50000 == 0) {
                        if(this.nominalTf <= this.saldo) {
                            console.log("Transfer berhasil")
                            this.saldo = this.saldo - this.nominalTf
                            console.log("Saldo anda sekarang = " + this.saldo)
                        } else if(this.nominalTf > this.saldo) {
                            console.log("Saldo anda kurang, isi dulu")
                        } else {
                            console.log("Isi dulu nominalnya bambang")
                        }
                    }  
                } else {
                    console.log("Ga ada pecahan lain elah")
                }
                break
            case false:
                console.log("Transaksi selesai anda akan dikeluarkan otomatis")
        }
    }

    selesai() {
        console.log("--------SELESAI--------")
        console.log("Transaksi selesai anda akan dikeluarkan otomatis")
    }
}

class Atm extends Bank {
    constructor(pin, tf, nominalTf = 0, jenisUang){
        super(pin, tf, nominalTf)
        this.jenisUang = jenisUang
    }
    pilihUang () {
        console.log("--------NOMINAL YANG AKAN KELUAR--------")
        if(this.jenisUang == uang.limaPuluhRibu) {
            console.log("Uang yang akan keluar pecahan 50.000")
        } else if(this.jenisUang == uang.seratusRibu) {
            console.log("Uang yang akan keluar pecahan 100.000")
        } else {
            console.log("Pecahan tidak tersedia")
        }
    }
}

// const bank = new Bank(123456, false)
// const bank = new Bank(123456, true, 1600000)
// bank.masuk()
// bank.cekSaldo()
// bank.transfer()
// bank.selesai()

const atm = new Atm(123456, false, 0, 100000)
// const atm = new Atm(123456, true, 500000, 100000)
atm.masuk()
atm.cekSaldo()
atm.pilihUang()
atm.transfer()
atm.selesai()
