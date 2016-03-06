package com.whut.cailiao.online.web.questionnaire;

import com.whut.cailiao.api.model.questionnaire.QuestionnaireContent;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * Created by niuyang on 16/2/23.
 */
@Controller
@RequestMapping("/q")
public class QuestionnaireController {

    /**
     * 正在使用中的问卷模板列表
     * 从问卷模板的发布表中读取
     */
    @RequestMapping(value = "/getPublishedQuestionnaireTemplateList.html", method = RequestMethod.GET)
    @ResponseBody
    public String getPublishedQuestionnaireTemplateList() {
        return null;
    }

    /**
     * 根据问卷模板获取用户的填写情况
     * 如果用户没有填写则展示空的问卷模板,如果填写了则展示填写的列表
     * 从问卷表中读取(问卷表不分编辑表和正式表)
     * @param questionnaireTemplateId
     */
    @RequestMapping(value = "/getQuestionnaireContentList/{questionnaireTemplateId}.html", method = RequestMethod.GET)
    @ResponseBody
    public String getQuestionnaireContentList(@PathVariable int questionnaireTemplateId) {
        return null;
    }

    /**
     * 临时保存用户问卷填写内容
     * 保存到问卷表
     */
    @RequestMapping(value = "/saveQuestionnaireContentTemp.html", method = RequestMethod.POST)
    @ResponseBody
    public String saveQuestionnaireDetailFillContentTemp(@RequestBody QuestionnaireContent questionnaireContent) {
        return null;
    }

    /**
     * 问卷发布
     * 更改问卷表状态
     * @param questionnaireContent
     */
    @RequestMapping(value = "/publishQuestionnaireContent.html", method = RequestMethod.PUT)
    @ResponseBody
    public String publishQuestionnaireContent(@RequestBody QuestionnaireContent questionnaireContent) {
        return null;
    }

    /**
     * 问卷删除
     * 删除填写错误的问卷
     */
    @RequestMapping(value = "/deleteQuestionnaireContent/{questionnaireContentId}.html", method = RequestMethod.DELETE)
    public String deleteQuestionnaireContent(@PathVariable int questionnaireContentId) {
        return null;
    }


}
