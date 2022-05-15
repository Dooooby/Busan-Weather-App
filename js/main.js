// $.getJSON('파일경로', function(dta) {//data로 할일})

$.getJSON(
    'https://api.openweathermap.org/data/2.5/weather?id=1838524&appid=cd7c42ba5bba9286498b96672473add9&units=metric',function(data){

        // let $nowDate = data.dt //Unix 코드 변경
        let $now = new Date($.now())
        let $nowDate = $now.getFullYear() + '/' + ($now.getMonth() + 1) + '/' + $now.getDate()
        let $nowTemp = data.main.temp
        let $minTemp = data.main.temp_min
        let $maxTemp = data.main.temp_max
        let $feelTemp = data.main.feels_like
        let $wIcon = data.weather[0].icon
        // http://openweathermap.org/img/wn/10d@2x.png
        // console.log(Date.now())
        // console.log(new Date($.now()))
        
        
        $('h1').append($nowDate)
        $('.temp').append($nowTemp + ' º')
        $('.lowtemp').append($minTemp + ' º')
        $('.hightemp').append($maxTemp + ' º')
        $('.feeltemp').append($feelTemp + ' º')
        $('.icon').append('<img src="http://openweathermap.org/img/wn/' + $wIcon + '.png">')


    }
)