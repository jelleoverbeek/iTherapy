/**
 * Created by jelleoverbeek on 26-03-16.
 */

//ChartJS configuration
Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 60,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",

    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "#F4F4F4",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: false,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'CircularMedium', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 13,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#747F97",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(103,82,255,1)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'CircularMedium', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'CircularBlack', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 16,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 10,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 10,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 5,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 3,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 25,

    // String - Template string for single tooltips
    tooltipTemplate: "<%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){}
};


$(function() {

    var edmrResultsData = {
        labels: ["1-12-15", "3-12-16", "5-12-16", "7-12-16", "14-12-16", "16-12-16"],
        datasets: [
            {
                label: "Test resultaten",
                fillColor: "rgba(103,82,255,0.25)",
                strokeColor: "rgba(103,82,255,1)",
                pointColor: "rgba(103,82,255,1)",
                data: [25, 35, 30, 45, 34, 64]
            }
        ]
    };

    var edmrResultsOptions = {

        //String - Colour of the grid lines
        scaleGridLineColor : "#F4F4F4",

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: true,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: 10,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 10,
        // Number - The scale starting value
        scaleStartValue: 0
    };

    // Selecting canvas element and applying ChartJS
    var edmrResultsCanvas = $("#emdr-results").get(0).getContext("2d");
    var edmrResults = new Chart(edmrResultsCanvas).Line(edmrResultsData, edmrResultsOptions);


    var treatmentProgressData = [
        {
            value: 70,
            color:"#6752FF",
            highlight: "#6752FF"
        },
        {
            value: 30,
            color: "#F2F2F2",
            highlight: "#F2F2F2"
        }
    ];

    var treatmentProgressOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : true,

        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",

        //Number - Amount of animation steps
        animationSteps : 140,

        //String - Animation easing effect
        animationEasing : "easeOutQuart",

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,

        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 75, // This is 0 for Pie charts

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: false
    };

    // Selecting canvas element and applying ChartJS
    var treatmentProgressCanvas = $("#treatment-progress").get(0).getContext("2d");
    var treatmentProgress = new Chart(treatmentProgressCanvas).Doughnut(treatmentProgressData, treatmentProgressOptions);
    
});