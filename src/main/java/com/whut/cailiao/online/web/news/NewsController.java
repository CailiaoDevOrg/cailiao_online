package com.whut.cailiao.online.web.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whut.cailiao.api.commons.ApiResponse;
import com.whut.cailiao.api.service.news.NewsService;
import com.whut.cailiao.online.web.BaseController;

@Controller
@RequestMapping("/news")
public class NewsController extends BaseController {
	
	@Autowired
	private NewsService newsService;

	@RequestMapping(value = "/getList.html", method = RequestMethod.GET)
    @ResponseBody
	public String getNewsFrontEndList() {
		ApiResponse response = this.newsService.getNewsFrontEndList(20);
		return convertApiResponseToJSONString(response);
	}
}
