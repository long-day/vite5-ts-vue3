const all_zh_CN_parts = import.meta.glob('./**/zh-CN.ts', { eager: true });

/**
 * ...Object.assign({},...Object.values(all_en_US_part).map((m:any)=> m.default))
 * 解释：
 *  all_en_US_part是一个 map[path(string):obj(module)].
 *  如:
 *    {
 *      './any_path/en-US.ts':{default:{some_field},other:{some_field}}
 *    }
 *  因此，可以先使用Object.values方法拿到所有扫描到的文件的module对象，使用map映射出默认导出对象，
 *  之后再使用Object.assign将映射出的所有对象拼接到一个新的对象之中。
 */
export default {
  'title': '长天',
  ...Object.assign({},...Object.values(all_zh_CN_parts).map((m:any)=> m.default))
};