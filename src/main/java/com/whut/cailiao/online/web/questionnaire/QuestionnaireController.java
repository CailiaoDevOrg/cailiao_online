package com.whut.cailiao.online.web.questionnaire;

import com.whut.cailiao.api.commons.ApiResponse;
import com.whut.cailiao.api.model.questionnaire.QuestionnaireContent;
import com.whut.cailiao.api.service.questionnaire.QuestionnaireService;
import com.whut.cailiao.online.web.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by niuyang on 16/2/23.
 */
@Controller
@RequestMapping("/q")
public class QuestionnaireController extends BaseController {

    @Autowired
    private QuestionnaireService questionnaireService;

    /**
     * finished
     * 正在使用中的问卷模板列表
     * 从问卷模板的发布表中读取
     */
    @RequestMapping(value = "/getUsingQuestionnaireTemplateList.html", method = RequestMethod.GET)
    @ResponseBody
    public String getUsingQuestionnaireTemplateList() {
        ApiResponse response = this.questionnaireService.getUsingQuestionnaireTemplateList();
        return convertApiResponseToJSONString(response);
    }

    /**
     * finished
     * 根据问卷模板获取用户的填写情况
     * 如果用户没有填写则展示空的问卷模板,如果填写了则展示填写的列表
     * 从问卷表中读取(问卷表不分编辑表和正式表)
     * @param questionnaireTemplateId
     */
    @RequestMapping(value = "/getQuestionnaireContentList/{questionnaireTemplateId}.html", method = RequestMethod.GET)
    @ResponseBody
    public String getQuestionnaireContentList(@PathVariable int questionnaireTemplateId) {
        String cementFactoryId = null;
        ApiResponse response = this.questionnaireService.getQuestionnaireContentList(questionnaireTemplateId, cementFactoryId);
        return convertApiResponseToJSONString(response);
    }

    /**
     * 查看填写的问卷的详情
     * @param questionnaireContentId
     * @return
     */
    @RequestMapping(value = "/getQuestionnaireContent/{questionnaireContentId}.html", method = RequestMethod.GET)
    @ResponseBody
    public String getQuestionnaireContent(@PathVariable int questionnaireContentId) {
        ApiResponse response = this.questionnaireService.getQuestionnaireContent(questionnaireContentId);
        return convertApiResponseToJSONString(response);
    }

    /**
     * finished
     * 临时保存用户问卷填写内容
     * 保存到问卷表
     */
    @RequestMapping(value = "/saveQuestionnaireContentTemp.html", method = RequestMethod.POST)
    @ResponseBody
    public String saveQuestionnaireContentTemp(@RequestBody QuestionnaireContent questionnaireContent) {
        ApiResponse response = this.questionnaireService.saveQuestionnaireContentTemp(questionnaireContent);
        return convertApiResponseToJSONString(response);
    }

    /**
     * 问卷发布
     * 更改问卷表状态
     * @param questionnaireContent
     */
    @RequestMapping(value = "/commitQuestionnaireContent.html", method = RequestMethod.POST)
    @ResponseBody
    public String commitQuestionnaireContent(@RequestBody QuestionnaireContent questionnaireContent) {
        ApiResponse response = this.questionnaireService.commitQuestionnaireContent(questionnaireContent);
        return convertApiResponseToJSONString(response);
    }

    /**
     * finished
     * 问卷删除
     * 删除填写错误的问卷
     */
    @RequestMapping(value = "/deleteQuestionnaireContent/{questionnaireContentId}.html", method = RequestMethod.GET)
    public String deleteQuestionnaireContent(@PathVariable int questionnaireContentId) {
        ApiResponse response = this.questionnaireService.deleteQuestionnaireContent(questionnaireContentId);
        return convertApiResponseToJSONString(response);
    }

}
