package com.nouirangeslider.googleapis.service;


import com.nouirangeslider.googleapis.model.*;
import com.nouirangeslider.googleapis.model.RootResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.Object;
import org.springframework.util.MultiValueMap;
import feign.*;

public interface RestServiceVirtualControllerService {

  /**
   * 
   * 
    * @param origin origin (optional)
    * @param destination destination (optional)
    * @param sensor sensor (optional)
   * @return RootResponse
   */
  @RequestLine("GET /api/directions/xml?origin={origin}&destination={destination}&sensor={sensor}")
  @Headers({
    "Accept: application/xml",  })
  RootResponse restServiceVirtualControllerInvoke(@Param("origin") String origin, @Param("destination") String destination, @Param("sensor") String sensor);


    /**
     * 
     * 
     * Note, this is equivalent to the other <code>restServiceVirtualControllerInvoke</code> method,
     * but with the query parameters collected into a single Map parameter. This
     * is convenient for services with optional query parameters, especially when
     * used with the {@link RestServiceVirtualControllerInvokeQueryParams} class that allows for
     * building up this map in a fluent style.
     * @param queryParams Map of query parameters as name-value pairs
     *   <p>The following elements may be specified in the query map:</p>
     *   <ul>
     *   <li>origin - origin (optional)</li>
     *   <li>destination - destination (optional)</li>
     *   <li>sensor - sensor (optional)</li>
     *   </ul>
     * @return RootResponse
     */
    @RequestLine("GET /api/directions/xml?origin={origin}&destination={destination}&sensor={sensor}")
    @Headers({
    "Accept: application/xml",    })
    RootResponse restServiceVirtualControllerInvoke
    (@QueryMap(encoded=true)
    MultiValueMap<String, String> queryParams);

}
