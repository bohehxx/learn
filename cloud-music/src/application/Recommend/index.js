import React, { useEffect } from "react";
import Slider from "../../components/slider";
import RecommendList from "../../components/list";
import { connect } from "react-redux";
import * as actionTypes from "./store/actionCreators";
import Scroll from "../../baseUI/scroll/index";
import { Content } from "./style";
import {forceCheck} from 'react-lazyload';
import Loading from '../../baseUI/loading/index';
import {renderRoutes} from 'react-router-config'
function Recommend(props) {
  const { bannerList, recommendList } = props;
  const { getBannerDataDispatch, getRecommendListDataDispatch,enterLoading } = props;
  useEffect(() => {
   // 如果页面有数据，则不发请求
  //immutable 数据结构中长度属性 size
  if (!bannerList.size){
    getBannerDataDispatch ();
  }
  if (!recommendList.size){
    getRecommendListDataDispatch ();
  }
    //eslint-disable-next-line
  }, []);
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}></Slider>
          <RecommendList recommendList={recommendListJS}></RecommendList>
        </div>
      </Scroll>
      { enterLoading ? <Loading></Loading> : null }
      {renderRoutes(props.route.routes)}
    </Content>
  );
}
const mapStateToProps = state => ({
  bannerList: state.getIn(["recommend", "bannerList"]),
  recommendList: state.getIn(["recommend", "recommendList"]),
  enterLoading: state.getIn (['recommend', 'enterLoading'])
});
// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    }
  };
};
// 将 ui 组件包装成容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend));
