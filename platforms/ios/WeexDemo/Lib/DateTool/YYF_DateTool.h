//
//  YYF_DateTool.h
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/20.
//  Copyright © 2018 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
NS_ASSUME_NONNULL_BEGIN

@interface YYF_DateTool : NSObject

+(NSString*)getCurrentTimes;
//获取当前时间戳有两种方法(以秒为单位)
+(NSString *)getNowTimeTimestamp;
+(NSString *)getNowTimeTimestamp2;


@end

NS_ASSUME_NONNULL_END
