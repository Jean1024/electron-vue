const SHANXI = 'http://shanxi.decision.tianqi.cn'
const WEATHER1 = 'http://decision-admin.tianqi.cn'
const WEATHER2 = 'http://national-observe-data.tianqi.cn'
const WEATHER3 = 'http://decision-171.tianqi.cn'
const WEATHER4 = 'http://scapi.weather.com.cn'
const WEATHER5 = 'http://openapi.mlogcn.com:8000'
const WEATHER6 = 'http://decision.tianqi.cn'

// 1.0 登录接口
const SIGN_IN = `${SHANXI}/home/work/login`
// 2.0 广告
const BANNER = `${SHANXI}/Home/Work/getnewslist/type/41`
// 3.0 预警接口
const WARN = `${WEATHER1}/Home/extra/getwarns`
// 4.0 图层接口
const LAYER = `${WEATHER2}/project/data/getcoverage`
// 5.0 站点接口
const POSITION = `${WEATHER3}/weather/rgwst/NewestDataNew`
// 6.0 实况排名
const OBSERVE =  `${WEATHER3}/weather/rgwst/NearStation`
// 7.0 空气质量排名
const AIR = `${WEATHER4}/weather/onareaids`
// 8.0 24小时预报
const PRE24 = `${WEATHER5}/api/aqi/fc/coor/116.298045/39.959907/h/2018011614/2018011714.json`
// 9.0 空气质量广告
const AIR_BANNER = `${SHANXI}//Home/Work/getnewslist/type/42`
// 10.0 雷达反射率
const RADAR = `${WEATHER6}/data/page/radar.html`

export default {
    SIGN_IN,
    BANNER,
    WARN,
    LAYER,
    POSITION,
    OBSERVE,
    AIR,
    PRE24,
    AIR_BANNER,
    RADAR
}