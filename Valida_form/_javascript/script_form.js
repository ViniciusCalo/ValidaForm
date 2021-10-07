//função para totalizar valor de assinatura mensal
    
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

$(function () {

        $("#acordeon").accordion({
            active: false,
            collapsible: true
        });

    $('.mask-numeros').mask('(99)99999-9999'); //caracteres numéricos
    $('.mask-cpf').mask('999.999.999-99'); //CPF
    $('.mask-real').maskMoney({
        prefix: 'R$ ',
        decimal: ',', thousands: '.', allowZero: true
    }); // valores monetários

    //TEMPORIZADOR
    var d = new Date();
document.getElementById("datahoje").value = d;

setInterval(contartempo, 1000);

var contador=1;
function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador;
	contador++;
}
});

function v_json(){
       //CHAMANDO E CONFERINDO O JSON
       let cadastro = '{"nickname": "Usuario" , "senha": "Abc$123"}';
       let v_cadastro = JSON.parse(cadastro);
       if(v_cadastro.nickname == document.getElementById("login") && v_cadastro.senha == document.getElementById("senha")){
            return true;}
       else{
           alert("Login ou Senha inválidos!!!")
           return false;}   
}

function valida_tudo(){

    if(v_json){
        document.getElementById("butassin").disabled = false; 
    }
    
    return false;
}




    

    
