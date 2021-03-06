angular.module('gatawayConfig',['ngRoute','login','home','apConfiguration','networkConfig','serverConfig','filterConfig','deviceConfig']).config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'pages/login/login.html',
        controller:'loginCtrl'
    })
}).service('globalFunc',function($window){
    return {
        del:function(event){
            var $parent=$(event.target).parents('.net-set');
            // console.log($parent);
            if($parent.length!==0){
                $parent.find('input').each(function(){
                    $(this).val('');
                })
            }else{
                $(event.target).prev('input').val('');
            }
        },
        back:function(href){
            $window.location.href='#/'+href;
        },
        select:function(option,optionObjString,selectObj){
            selectObj[optionObjString]=option;
        },
        switchPage:function(event,page,oldPage){
            event.preventDefault();
            oldPage.name=page.name;
            oldPage.title=page.title;
            oldPage.needSave=page.needSave;
        }
    }
}).service('httpService',function($http,$window){
    this.login=function(){
        window.location.href='#/home';
    };
    this.save=function(href){
        $window.location.href='#/'+href;
    }
})