//
//  YYF_Location_Module.m
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/21.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "YYF_Location_Module.h"
#import <CoreLocation/CoreLocation.h>
@interface YYF_Location_Module ()<CLLocationManagerDelegate>

@property (nonatomic,strong) CLLocationManager * locationManager;
@property (nonatomic,strong) CLGeocoder * geocoder;//初始化地理编码器

@end

@implementation YYF_Location_Module

WX_EXPORT_METHOD(@selector(startLocation:));

-(CLGeocoder *)geocoder{
    if (!_geocoder) {
        _geocoder = [[CLGeocoder alloc]init];
    }
    return _geocoder;
}

-(CLLocationManager *)locationManager{
    if (!_locationManager) {
        _locationManager = [[CLLocationManager alloc] init];
        _locationManager.delegate = self;
        _locationManager.desiredAccuracy = kCLLocationAccuracyBest;
    }
    return _locationManager;
}


-(void)startLocation:(WXModuleCallback)callBlock{
    self.callback = callBlock;
    if ([CLLocationManager locationServicesEnabled]) {
        
        [self.locationManager requestWhenInUseAuthorization];
        
//        [self.locationManager startUpdatingLocation];
    }
    
}

-(void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray<CLLocation *> *)locations{
    
    [manager stopUpdatingLocation];
    CLLocation *location = [locations lastObject];
    
    NSMutableDictionary *infoDic = [@{
                                      @"latitude":[NSString stringWithFormat:@"%f",location.coordinate.latitude],
                                      @"longitude":[NSString stringWithFormat:@"%f",location.coordinate.longitude],
                                      @"altitude":[NSString stringWithFormat:@"%f",location.altitude],
                                      @"speed":[NSString stringWithFormat:@"%f",location.speed],
                                      } mutableCopy];
    
    [self.geocoder reverseGeocodeLocation:location completionHandler:^(NSArray<CLPlacemark *> * _Nullable placemarks, NSError * _Nullable error) {
        [SVProgressHUD dismiss];
        NSDictionary *addressDic = [NSDictionary dictionary];
        if (error == nil) {
            if (placemarks.count > 0) {
                CLPlacemark *placemark = [placemarks objectAtIndex:0];
                addressDic = placemark.addressDictionary;
            }
        }
        infoDic[@"geocoder"] = addressDic;
        self.callback(@{@"isSuccess":@"1",@"locationInfo":infoDic});
    }];
}
-(void)locationManager:(CLLocationManager *)manager didFailWithError:(NSError *)error{
    [SVProgressHUD dismiss];
}

-(void)locationManager:(CLLocationManager *)manager didChangeAuthorizationStatus:(CLAuthorizationStatus)status{
    if (status == kCLAuthorizationStatusAuthorizedAlways ||
        status == kCLAuthorizationStatusAuthorizedWhenInUse ) {
        [SVProgressHUD show];
        [manager startUpdatingLocation];
    } else if( status != kCLAuthorizationStatusNotDetermined){
        __weak typeof(self) weakSelf = self;
        [self showAlert:@"App定位权限未打开"
                message:@"请进入系统【设置】>【隐私】>【定位服务】中打开开关，并且允许应用使用定位服务"
             cancelText:@"取消" confirmText:@"去设置" confirmHandle:^{
                 //iOS10
                 [[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];
                 weakSelf.callback(@{@"isSuccess":@"0",@"locationInfo":@{}});
             }];
    }
}


@end
