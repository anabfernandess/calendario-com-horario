function updateClock() {
    var currentTime = new Date();
  
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    var clockDiv = document.getElementById('clock');
    clockDiv.textContent = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
  
    var dateDiv = document.getElementById('date');
    dateDiv.textContent = currentDate();
  
    var dayDiv = document.getElementById('day');
    dayDiv.textContent = currentDay();
  
    var quoteDiv = document.getElementById('quote');
    quoteDiv.textContent = getQuote(currentDay());
  }
  
  function addZero(number) {
    return (number < 10 ? '0' : '') + number;
  }
  
  function currentDate() {
    var currentDate = new Date();
    return currentDate.toLocaleDateString('pt-BR');
  }
  
  function currentDay() {
    var days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var currentDay = new Date().getDay();
    return days[currentDay];
  }
  
  function getQuote(day) {
    var quotes = {
      'Domingo': 'Aproveite o dia para descansar e recarregar as energias.',
      'Segunda-feira': 'Comece a semana com determinação e foco nos seus objetivos.',
      'Terça-feira': 'Acredite em si mesmo e supere todos os desafios que surgirem.',
      'Quarta-feira': 'Mantenha a positividade e busque o equilíbrio em todas as áreas da sua vida.',
      'Quinta-feira': 'Não desista, você está mais perto do seu objetivo do que imagina.',
      'Sexta-feira': 'Celebre as conquistas da semana e aproveite para relaxar e se divertir.',
      'Sábado': 'Aproveite o dia para fazer o que te faz feliz e recarregar as energias para a próxima semana.'
    };
  
    return quotes[day];
  }
  
  
  setInterval(updateClock, 1000);
  
  // o código JavaScript updateClock() é chamado a cada segundo pelo setInterval(), atualizando o relógio digital, a data e o dia atual no HTML.
  //A função addZero() é usada para adicionar um zero à esquerda de números menores que 10, para garantir um formato consistente.
  //As funções currentDate() e currentDay() obtêm a data e o dia atual usando a função toLocaleDateString() e getDay() do objeto Date, respectivamente.
    