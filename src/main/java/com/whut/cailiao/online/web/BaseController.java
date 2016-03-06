package com.whut.cailiao.online.web;

import com.alibaba.fastjson.JSON;
import com.whut.cailiao.api.commons.ApiResponse;

/**
 * Created by niuyang on 16/3/7.
 */
public class BaseController {

    /**
     * 对ApiResponse的返回值序列化,转换成json格式
     * @param response
     * @return
     */
    protected String convertApiResponseToJSONString(ApiResponse response) {
        response = (response == null ? ApiResponse.createCallErrorApiResponse() : response);
        return JSON.toJSONString(response);
    }
}
