var app = angular.module('automato', []);

app.controller('init', function($scope){
    $scope.app = 'Autômato Finito Determinístico by BlackBeard'
    
    var _counter;
    var _word;    
    $scope.isTested = false;
    
    $scope.clear = function(){
        _word = [];
        $scope.word = "";
        $scope.isTested = false;
    }
    
    $scope.testWord = function(word){
      
      _word = word.split("");
      start()
       
    }
    
    var start = function(){
        _counter = 0;
        q0();
         $scope.isTested = true;
    }
    
    /*ESTADOS DE Q0, Q1,Q2,Q3 E QF*/
    var q0 = function(){
        if(_counter < _word.length){
            if(_word[_counter] === 'a'){
                 _counter++;
                 q1();
            }else if(_word[_counter] === 'b'){
                 _counter++;
                 q2();
            }else{
                error();
            }
        }else{
            error();
        }
    }
    
    var q1 = function(){
         if(_counter < _word.length){
             if(_word[_counter] === 'a'){
                 _counter++;
                 q1();
             }else if(_word[_counter] === 'b'){
                 _counter++;
                 q3();
             }else{
                 error();
             }
         }else{
             error();
         }
    }
    
    
    var q2 = function(){
         if(_counter < _word.length){
             if(_word[_counter] === 'a'){
                  _counter++;
                 q1();
             }else if(_word[_counter] === 'b'){
                  _counter++;
                 q2();
             }else{
                 error();
             }
         }else{
             error();
         }
    }
    
    var q3 = function(){
        if(_counter < _word.length){
             if(_word[_counter] === 'b'){
                  _counter++;
                 qf();
             }else if(_word[_counter] === 'a'){
                  _counter++;
                 q1();
             }else{
                 error();
             }
        }else{
            error();
        }
    }
    
     var qf = function(){
          if(_counter < _word.length){
             if(_word[_counter] === 'b'){
                  _counter++;
                  q2();
             }else if(_word[_counter] === 'a'){
                  _counter++;
                 q1();
             }else{
                 error();
             }
            }else{
                $scope.msg = "Palavra Aceita!";
            }
       
    }
    
    var error = function(){
        $scope.msg = "Palavra Não Aceita!";
    }
        
})
