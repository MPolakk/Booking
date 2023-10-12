<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateHouses extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('houses')) :
            static::$capsule::schema()->create('houses', function (Blueprint $table) {
                $table->increments('id');
                $table->string('username');
                $table->string('adress');
                $table->integer('numberOfRoom');
                $table->decimal('area', 8, 2);
                $table->decimal('price', 10, 2);
                $table->text('description');
                $table->integer('phoneNumber');
                $table->timestamps();
            });
        endif;

        // you can now build your migrations with schemas.
        // see: https://leafphp.dev/docs/mvc/schema.html
        // Schema::build('houses');
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('houses');
    }
}
