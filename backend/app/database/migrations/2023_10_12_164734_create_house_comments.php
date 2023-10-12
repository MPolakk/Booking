<?php

use Leaf\Schema;
use Leaf\Database;
use Illuminate\Database\Schema\Blueprint;

class CreateHouseComments extends Database
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        if (!static::$capsule::schema()->hasTable('house_comments')) :
            static::$capsule::schema()->create('house_comments', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('houseID');
                $table->integer('userID');
                $table->text('comment');
                $table->integer('rating');
                $table->timestamps();
            });
        endif;

        // you can now build your migrations with schemas.
        // see: https://leafphp.dev/docs/mvc/schema.html
        // Schema::build('house_comments');
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        static::$capsule::schema()->dropIfExists('house_comments');
    }
}
