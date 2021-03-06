//business logic...

$(document).ready(function() {

    //Variables considered include grossIncome,taxableIncome,nssf,nhif,paye,netPay and effectiveRate
    //Functions calculated for PAYE,NSSF,NHIF and NETPAY

    var grossIncome;
    var taxableIncome;
    var netPay;
    var effectiveRate;
    var paye;
    var nhif;

    var oldnssf = 200;
    var personalRelief = 2400;

    //PAYE Function  ...

    var payeF = function (taxableIncome) {
        var paye = 0;

            if (taxableIncome <= 12,298) {
                return paye = 0.1*taxableIncome-personalRelief;
            }   else if (taxableIncome >= 12,299 && taxableIncome <= 23,885) {
                return paye = (taxableIncome-12,299)*0.15 -personalRelief ;
            }   else if (taxableIncome >= 23,886 && taxableIncome <= 35,472) {
                return paye = (taxableIncome-23,886)*0.20 -personalRelief ;
            }    else if (taxableIncome >= 35,473 && taxableIncome <= 47059) {
                return paye = (taxableIncome-35,473)*0.25 - personalRelief;
            }   else if (taxableIncome >= 47059) {
                return paye = (taxableIncome-47059)*0.3 -personalRelief;
            }   else return(0);
       
    };

    //NHIF Function ...

    var nhifF = function (grossIncome){
        var nhif =0

        if (grossIncome<=5999){
            return nhif=150;
        }   else if (grossIncome >= 6000 && grossIncome <= 7999){
            return nhif=300;
        }   else if (grossIncome >= 8000 && grossIncome <=11999) {
            return nhif=400;
        }   else if (grossIncome >= 12000 && grossIncome <=14999) {
            return nhif=500;
        }   else if (grossIncome >= 15000 && grossIncome <=19999) {
            return nhif=600;
        }   else if (grossIncome >= 20000 && grossIncome<= 24999) {
            return nhif=750;
        }   else if (grossIncome >= 25000 && grossIncome <= 29999) { 
            return nhif=850;
        }   else if (grossIncome >= 30000 && grossIncome <= 34999) {
            return nhif=900;
        }   else if (grossIncome >= 35000 && grossIncome <= 39999) {
            return nhif=950;
        }   else if (grossIncome >= 40000 && grossIncome <= 44999) {
            return nhif=1000;
        }   else if (grossIncome >= 45000 && grossIncome <= 49999) {
            return nhif=1100;
        }   else if (grossIncome >= 50000 && grossIncome <= 59999) {
            return nhif=1200;
        }   else if (grossIncome >= 60000 && grossIncome <= 69999) {
            return nhif=1300;
        }   else if (grossIncome >= 70000 && grossIncome <= 79999) {
            return nhif=1400;
        }   else if (grossIncome >= 80000 && grossIncome <= 89999) {
            return nhif=1500;
        }   else if (grossIncome >= 90000 && grossIncome <= 99999) {
            return nhif=1600;
        }   else if (grossIncome >= 100000) {
            return nhif=1700;
        }   else return(0);
    };

    //NSSF Function ...

    var nssfF = function () {
        var nssf = 0;
        if ( grossIncome <= 18000){
            return nssf = 0.6* grossIncome;
        }   else return(1080);
    };

//End of Business Logic



//jQuery User Interface....

    $("#newrate").click(function(){
            var grossIncome = parseInt($("input#income").val());
            var taxableIncome = grossIncome - nssfF();
            var netPay = grossIncome - nssfF() - payeF(taxableIncome) - nhifF(grossIncome);
            var effectiveRate = payeF(taxableIncome) / grossIncome * 100;

            event.preventDefault();
            

            $("#grossIncome").empty().append(grossIncome);
            $("#nssf").empty().append(nssfF());
            $("#taxablePay").empty().append(taxableIncome);
            $("#personalR").empty().append(personalRelief);
            $("#insuranceR").empty().append(grossIncome);
            $("#paye").empty().append(payeF(taxableIncome).toFixed(2));
            $("#nhif").empty().append(nhifF(grossIncome));
            $("#netPay").empty().append(netPay.toFixed(2));
            $("#effectiveTax").empty().append(effectiveRate.toFixed(2));
          
    });
    $("#oldrate").click(function(){
            var grossIncome = parseInt($("input#income").val());
            var taxableIncome = grossIncome - oldnssf;
            var netPay = grossIncome - oldnssf - payeF(taxableIncome) - nhifF(grossIncome);
            var effectiveRate = payeF(taxableIncome) / grossIncome * 100;

            event.preventDefault();
            

            $("#grossIncome").empty().append(grossIncome);
            $("#nssf").empty().append(oldnssf);
            $("#taxablePay").empty().append(taxableIncome);
            $("#personalR").empty().append(personalRelief);
            $("#paye").empty().append(payeF(taxableIncome).toFixed(2));
            $("#nhif").empty().append(nhifF(grossIncome));
            $("#netPay").empty().append(netPay.toFixed(2));
            $("#effectiveTax").empty().append(effectiveRate.toFixed(2));
          
    });



});
