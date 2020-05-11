$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/net/idt/svp/ui/features/Canvas.feature");
formatter.feature({
  "name": "Canvas Program Library",
  "description": "  Verify Canvas Program Library feature",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Visit Program Library page and verify all the programs listed in library",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I tap on \"\u003cprogram\u003e\" listed in program library page",
  "keyword": "When "
});
formatter.step({
  "name": "I see canvas program and build section of the \"\u003cprogram\u003e\" program",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "program"
      ]
    },
    {
      "cells": [
        "MotorPower"
      ]
    }
  ],
  "tags": [
    {
      "name": "@motorPower_program"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am on the Program Library page",
  "keyword": "Given "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_am_on_the_Program_Library_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see program library page is launched",
  "keyword": "Then "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_see_program_library_page_is_launched()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit Program Library page and verify all the programs listed in library",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@motorPower_program"
    }
  ]
});
formatter.step({
  "name": "I tap on \"MotorPower\" listed in program library page",
  "keyword": "When "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_tap_on_listed_in_program_library_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see canvas program and build section of the \"MotorPower\" program",
  "keyword": "Then "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_see_canvas_program_and_build_section_of_the_program(String)"
});
formatter.result({
  "status": "passed"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "program"
      ]
    },
    {
      "cells": [
        "IncreaseSpeed"
      ]
    }
  ],
  "tags": [
    {
      "name": "@increaseSpeed_program"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am on the Program Library page",
  "keyword": "Given "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_am_on_the_Program_Library_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see program library page is launched",
  "keyword": "Then "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_see_program_library_page_is_launched()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit Program Library page and verify all the programs listed in library",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@increaseSpeed_program"
    }
  ]
});
formatter.step({
  "name": "I tap on \"IncreaseSpeed\" listed in program library page",
  "keyword": "When "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_tap_on_listed_in_program_library_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see canvas program and build section of the \"IncreaseSpeed\" program",
  "keyword": "Then "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_see_canvas_program_and_build_section_of_the_program(String)"
});
formatter.result({
  "status": "passed"
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "program"
      ]
    },
    {
      "cells": [
        "MotorDirectionAndMotorTime"
      ]
    }
  ],
  "tags": [
    {
      "name": "@motorDirectionAndMotorTime_program"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I am on the Program Library page",
  "keyword": "Given "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_am_on_the_Program_Library_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see program library page is launched",
  "keyword": "Then "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_see_program_library_page_is_launched()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Visit Program Library page and verify all the programs listed in library",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@motorDirectionAndMotorTime_program"
    }
  ]
});
formatter.step({
  "name": "I tap on \"MotorDirectionAndMotorTime\" listed in program library page",
  "keyword": "When "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_tap_on_listed_in_program_library_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see canvas program and build section of the \"MotorDirectionAndMotorTime\" program",
  "keyword": "Then "
});
formatter.match({
  "location": "CanvasProgramLibraryStepDefinitions.i_see_canvas_program_and_build_section_of_the_program(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/net/idt/svp/ui/features/helloworld.feature");
formatter.feature({
  "name": "Hello World",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Say hello to the world",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I say hello to the world",
  "keyword": "When "
});
formatter.match({
  "location": "HelloWorldStepDefinition.i_say_hello_to_the_world()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Hello World\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HelloWorldStepDefinition.i_should_see(String)"
});
formatter.result({
  "status": "passed"
});
});