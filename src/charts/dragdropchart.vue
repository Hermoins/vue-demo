<template>
  <div style="width:800px;height:500px" ref="ddechart"></div>
</template>


<script>
export default {
  data() {
    return {
      data: [
        [15, 0],
        [-50, 10],
        [-56.5, 20],
        [-46.5, 30],
        [-22.1, 40]
      ]
      //   ddChart:{}
    };
  },
  methods: {
    initCharts() {
      const symbolSize = 20;

      const option = {
        tooltip: {
          triggerOn: "none",
          formatter: function(params) {
            return (
              "X: " +
              params.data[0].toFixed(2) +
              "<br>Y: " +
              params.data[1].toFixed(2)
            );
          }
        },
        xAxis: {
          min: -100,
          max: 80,
          type: "value",
          axisLine: { onZero: false }
        },
        yAxis: {
          min: -30,
          max: 60,
          type: "value",
          axisLine: { onZero: false }
        },
        series: [
          {
            id: "a",
            type: "line",
            smooth: true,
            symbolSize: symbolSize, // 为了方便拖拽，把 symbolSize 尺寸设大了。
            data: this.data
          }
        ]
      };
      let ddChart = this.$echarts.init(this.$refs.ddechart);
      ddChart.setOption(option);
      ddChart.setOption({
        graphic: this.$echarts.util.map(this.data, (item, dataIndex) => {
          return {
            type: "circle",
            position: ddChart.convertToPixel("grid", item),
            shape: {
              r: symbolSize / 2
            },
            invisible: true,
            draggable: true,
            ondrag: this.$echarts.util.curry(
              this.onPointDragging,
              dataIndex,
              ddChart
            ),
            onmousemove: this.$echarts.util.curry(
              this.showTooltip,
              dataIndex,
              ddChart
            ),
            onmouseout: this.$echarts.util.curry(
            //   this.hideTooltip,
            //   dataIndex,
            //   ddChart
            ),
            z: 100
          };
        })
      });
      window.addEventListener("resize", function() {
        ddChart.setOption({
          graphic: this.$echarts.util.map(this.data, (item) => {
            return {
              position: ddChart.convertToPixel("grid", item)
            };
          })
        });
      });
    },

    showTooltip(dataIndex, ddChart) {
      ddChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: dataIndex
      });
    },

    hideTooltip(ddChart) {
      ddChart.dispatchAction({
        type: "hideTip"
      });
    // window.console.log(ddChart)
    },

    onPointDragging(dataIndex, ddChart) {
      this.data[dataIndex] = ddChart.convertFromPixel("grid", this.position);
      ddChart.setOption({
        series: [
          {
            id: "a",
            data: this.data
          }
        ]
      });
    }
  },
  mounted() {
    this.initCharts();
  }
};
</script>