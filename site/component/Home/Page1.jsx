import React from 'react';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page1() {
  return (
    <ScrollOverPack id="page1" scrollName="page1" className="content-wrapper page" playScale={1} replay>
      <QueueAnim delay={300} key="text" duration={550} type="bottom" leaveReverse hideProps={{ child: null }}>
        <div className = "start-button" key="button">
          <a href="#/docs/pattern">开始探索</a>
        </div>
        <div className="text-wrapper left-text">
          <h2 key="h2">海量的通用样式</h2>
          <p key="p" style={{ maxWidth: 260 }}>抽象通用的基础样式，为组件的提供强有力的支持</p>
          <div key="button">
            <Link to="/docs/pattern/navigation">
              <Button type="primary" size="large">
                了解更多
                <Icon type="right" />
              </Button>
            </Link>
          </div>
        </div>
      </QueueAnim>
      <TweenOne key="image" className="image1 image-wrapper" animation={{ x: 0, opacity: 1, delay: 300, duration: 550 }}
        style={{ transform: 'translateX(100px)', opacity: 0 }} hideProps={{ reverse: true }} />
    </ScrollOverPack>
  );
}
