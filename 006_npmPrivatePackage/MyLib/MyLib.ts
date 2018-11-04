/* THIS is NOT a module because does not use 'export' keyword */
namespace MyLib{
    //Here we use export to export the sub-namespace, but it does not have any effect to the module system because we are not in the top-level!
    export namespace Math {
        export function IsPositive(value:number) : boolean{
            return value > -1;
        }

        //this function is not marked with export: it cannot be used outside of MyLib.Math namespace!
        function AprivateFunction() : void{

        }
    }
}