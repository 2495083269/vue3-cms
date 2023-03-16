import * as echarts from 'echarts'

export default function (el:HTMLElement) {
    const echartInstance = echarts.init(el)

    const setOptions = (options: echarts.EChartsOption) => {
        echartInstance.setOption(options)
    }

    // 自适应函数
    const setResize = () => {
        echartInstance.resize()
    }

    window.addEventListener('resize', () => {
        echartInstance.resize()
    })

    return {
        echartInstance,
        setOptions,
        setResize
    }

}