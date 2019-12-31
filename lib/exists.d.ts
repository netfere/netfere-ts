/**
 * 判断value是否存在于data数据中
 * @param {*} source 可以为Array,Object,String，三种情况说明如下：
 * 一、source=Array时:
 *  1)如果value是回调函数则该函数由Array.some回调；
 *  2)如果value是数组时则判断数组中的项目是否在source中，此时every=true则必须全部都在,every=false时则只要有一项存在即可;
 *  3)value为其他数据时，直接判断是否存在于source中;
 * 二、source=Object时:
 *  1)如果value=String时，则判断source中是否存在value的键名。需注意的是并不判断键值;
 *  2)如果value=String[]时，则判断数组中的键名是否存在，every=true则要求每项都存在;
 * 三、source=String时，value可以是String,Regexp类型，来判断是否存在于source中;
 * @param {*} value 详见source中的说明
 * @param {Boolean} every 详见source中的相关说明
 * @returns {Boolean} 返回是否存在的结果
 */
export declare function exists(source: any, value: any, every?: boolean): any;
