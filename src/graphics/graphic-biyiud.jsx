
//components


//librerias
import { Col, Container, Row } from "react-bootstrap";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";
import React, { Component } from 'react';
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";



class GraphicBiyiud extends Component {
  componentDidMount() {

    var root = am5.Root.new("chartdiv-biyiud");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Dark.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270
      })
    );
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270
      })
    );
    
    series.states.create("hidden", {
      endAngle: -90
    });
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
      category: "React",
      value: 401.9
    }, {
      category: "JavaScript",
      value: 401.9
    }, {
      category: "GitLab",
      value: 90
    }, {
      category: "Jira",
      value: 200
    }, {
      category: "Scrum",
      value: 339.9
    }
]);


    // series.labels.template.setAll({
    //   fontSize: 0.1,
    //   text: "{category}",
    //   textType: "radial",
    //   radius: 0,
    //   centerX: am5.percent(100),
    //   fill: am5.color(0xffffff)
    // })

    // if(){
    //   let legend = chart.children.push(am5.Legend.new(root, {

    //     layout: am5.GridLayout.new(root, {
    //       maxColumns: 3,
    //       fixedWidthGrid: true
    //     }),

    //     centerY: am5.percent(50),
    //     y: am5.percent(50),
    //     layout: root.verticalLayout,
    //     height: am5.percent(100),
    //     verticalScrollbar: am5.Scrollbar.new(root, {
    //       orientation: "vertical"
    //     })

    //   }));

    //   legend.data.setAll(series.dataItems);

    // }
    
    series.appear(1000, 100);

    this.root = root;
  }

  componentWillUnmount() {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return (
        <Container>

            <div id="chartdiv-biyiud" ></div>
        </Container>
    );
  }
}

export default GraphicBiyiud;