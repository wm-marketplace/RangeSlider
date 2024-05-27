# Information about Project Folder Structure and Files

##RangeSlider
    noUiSlider is a lightweight, ARIA-accessible JavaScript range slider with multi-touch and keyboard support. It is fully GPU animated: no reflows, so it is fast; even on older devices. It also fits wonderfully in responsive designs and has no dependencies.

##Features
    Accessible with aria and keyboard support
    GPU animated: no reflows, so fast; even on older devices
    All modern browsers and IE > 9 are supported
    No dependencies
    Fully responsive
    Multi-touch support on Android, iOS and Windows devices


##Slider Configuration values
    1.Handles
        The number of handles can be set using the start option. This option accepts an array of initial handle positions. A handle is created for every provided value.
        noUiSlider.create(handlesSlider, {
            start: [4000, 8000],
            range: {
                'min': [2000],
                'max': [10000]
            }
        });
    2.Range
        All values on the slider are part of a range. The range has a minimum and maximum value. If the minimum value is equal to the maximum value, handles are evenly spread across the slider.
        noUiSlider.create(handlesSlider, {
            range: {
                'min': [2000],
                'max': [10000]
            }
        });
    3.Stepping and snapping to values
        The amount the slider changes on movement can be set using the step option.
        noUiSlider.create(stepSlider, {
            step: 1000,
        });

##Events
    noUiSlider offers several ways to listen to interaction: 'update', 'change', 'set', 'slide' and 'drag'. These events can all be used at the same time. There are also the 'start' and 'end' events, that fire when a drag is started or ended.

    Events always fire in the following order:
        'start' > 'slide' > 'drag' > 'update' > 'change' > 'set' > 'end'

##LINKS
    Documentation links: https://refreshless.com/nouislider/
    
## pom.xml
  Add any maven dependencies to this file. Dependencies declared in this file will be available on the classpath.

## lib
  Add custom jar files to this folder. Files added to this folder will be copied to WEB-INF/lib/ on the classpath.

## services
  All services should be added via studio. Once added, services can be edited via eclipse or other editors, including adding additional classes. 
  Classes in this folder will be compiled when the project is run or deployed.
  Files added to this folder will be copied to WEB-INF/classes/ on the classpath.
  Modifications to imported services can be lost upon re-import.

  To see external updates in studio, use the refresh button in the java editor.
 
## src/main/java
  Add your application sources such as java class files to this folder. 
  Files added to this folder will be copied to WEB-INF/classes/ on the classpath.
  
## src/main/resources
  Add your application resources such as properties and xml files to this folder. 
  Files added to this folder will be copied to WEB-INF/classes/ on the classpath.

## src/main/webapp
  Add web application sources to this folder.
  Files you need to know:
  - **app.css:** Application CSS
  - **index.html:** Can be edited directly to customize, such as including meta, script and other tags.
  - **app.js:** Contains any application owned component definitions and functions.
  - **app.variables.json:** Contains any application variable definition.

## src/test/java
  Add your unit tests specific to the application such as JUnit tests to this folder.

## src/test/resources
  Add your test resources such as properties and xml files to this folder.

## src/main/webapp/WEB-INF/data
  This data directory is for HSQLDB Databases.
  
  By default, it contains some sample databases.
  If your project does not use these sample database, you can delete these files and directory to reduce the size of your project.

  You can also add your own HSQLDB database or other data files to this directory. All HSQLDB databases must be in this directory.

## src/main/webapp/pages
  Each project page creates a folder by the name of the page, i.e Main. 
  All page files in the pages folder are studio managed. 
  Files you need to know:
  - **Page CSS (i.e. Main.css):** Contains custom css added in source, css or by applying custom styles to components.
  - **Page HTML (i.e. Main.html):** Contains any custom markup added in the source, markup editor. Can be edited with the project closed.
  - **Page JS (i.e. Main.js):** Can be edited via the file system. Use the refresh button in the source, script panel if you edit this file outside of studio.
  - **Page Variable (i.e. Main.variable.json):** Can be edited via the file system. Use the refresh button in the source, script panel if you edit this file outside of studio.

## src/main/webapp/services
  Contains service definition files used by studio. These files are not user editable. 

## src/main/webapp/resources
  Created upon first use of the resources panel in studio. These are the folders uses by the resources panel and resources in binding. 

## src/main/webapp/WEB-INF
  web.xml is a studio managed file. Use user-web.xml. Changes to user-web.xml will be merged into web.xml on the classpath.

## src/main/webapp/WEB-INF/classes
  This folder is populated by studio. Do not edit or add any files to this folder. Changes will be lost. Use src/main/resources instead.

## src/main/webapp/WEB-INF/lib
  This folder is populated by studio. Do not edit or add any files to this folder. Changes will be lost. Add jars into lib directory of the project or add dependencies in the pom.xml instead.
